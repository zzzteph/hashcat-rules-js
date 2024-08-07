# hashcat-rules-js

An implementation of the hashcat rules engine in JavaScript. More information about rule-based attacks and the rules themselves can be found on the [Hashcat wiki](https://hashcat.net/wiki/doku.php?id=rule_based_attack).



## Installation

```sh
npm install hashcat-rules-js
```

### Compiles and minifies for production

```sh
npm run build
```


## Usage

```javascript
const hashcatRule = require('hashcat-rules-js');
const password="hashcat";
const rule="$1";
const result= hashcatRule.applyRule(password,rule)
```


### Parameters

The **applyRule** function takes the following options:

 - **password** (required): The password to which the rules will be applied.
 - **rule** (required): Rules compatible with the Hashcat rules engine.
 
 
### Return Value
The **applyRule** function returns a string with the applied rules.

- if rule is an empty string, **false** will be returned
- if rule starts with **#** (hash), **false** will be returned

 

### Example

```javascript
const hashcatRule = require('hashcat-rules-js');
const result= hashcatRule.applyRule("hashcat","$1")
console.log(result);//hashcat1
```

### Rules and output

|Name|Function|Description|Example Rule|Input Word|Output Word|
| --- | --- | --- | --- | --- | --- |
|Nothing|:|Do nothing (passthrough)|:|p@ssW0rd|p@ssW0rd|
|Lowercase|	l|Lowercase all letters|	l|p@ssW0rd	|p@ssw0rd	|
|Uppercase|u|Uppercase all letters	|u|p@ssW0rd	|P@SSW0RD|
|Capitalize|	c|Capitalize the first letter and lower the rest	|c|p@ssW0rd	|	P@ssw0rd|
|Invert Capitalize	|C|Lowercase first found character, uppercase the rest	|C|p@ssW0rd	|p@SSW0RD|
|Toggle Case	|	t|Toggle the case of all characters in word.	|t|p@ssW0rd	|P@SSw0RD	|
|Toggle @	|TN|Toggle the case of characters at position N	|T3|p@ssW0rd	|p@sSW0rd	|
|Reverse|	r|Reverse the entire word	|r|p@ssW0rd	|dr0Wss@p	|
|Duplicate|d|Duplicate entire word	|d|p@ssW0rd	|p@ssW0rdp@ssW0rd	|
|Duplicate N	|pN|Append duplicated word N times	|p2|p@ssW0rd	|p@ssW0rdp@ssW0rdp@ssW0rd	|
|Reflect|f|Duplicate word reversed	|f|p@ssW0rd	|p@ssW0rddr0Wss@p	|
|Rotate Left	|{|Rotate the word left.	|	{|p@ssW0rd	|@ssW0rdp	|
|Rotate Right	|}|Rotate the word right	|}|p@ssW0rd	|dp@ssW0r	|
|Append Character	|$X	|Append character X to end	|$1	|p@ssW0rd	|p@ssW0rd1	|
|Prepend Character	|^X	|Prepend character X to front	|^1	|p@ssW0rd	|1p@ssW0rd	|
|Truncate left	|[|Delete first character	|[|p@ssW0rd	|@ssW0rd	|
|Trucate right	|]|Delete last character	|	]|p@ssW0rd	|p@assW0r	|
|Delete @ N	|DN|Delete character at position N	|D3|p@ssW0rd	|p@sW0rd	|
|Extract range	|xNM|Extract M characters, starting at position N	|x04|p@ssW0rd	|p@ss	|
|Omit range	|ONM|Delete M characters, starting at position N	|O12|p@ssW0rd	|psW0rd	|
|Insert @ N	|iNX|Insert character X at position N	|i4!	|p@ssW0rd	|p@ss!W0rd	|
|Overwrite @ N	|oNX|Overwrite character at position N with X	|o3$	|p@ssW0rd	|p@s$W0rd	|
|Truncate @ N		|'N	|Truncate word at position N	|'6	|p@ssW0rd	|p@ssW0	|
|Replace	|sXY|Replace all instances of X with Y	|ss$	|p@ssW0rd	|p@$$W0rd	|
|Purge	|@X	|Purge all instances of X	|@s	|p@ssW0rd	|p@W0rd	|
|Duplicate first N|zN	|Duplicate first character N times		|z2|p@ssW0rd	|ppp@ssW0rd	|
|Duplicate last N|ZN|Duplicate last character N times	|Z2|p@ssW0rd	|p@ssW0rddd	|
|Duplicate all|q|Duplicate every character	|q|p@ssW0rd	|pp@@ssssWW00rrdd	|



