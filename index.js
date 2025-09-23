function convertN(chr) {
    if (typeof chr === 'number')
    {
        return chr;
    }
    if (chr >= '0' && chr <= '9') {
        return Number(chr);
    }
    return Number(chr.toUpperCase().charCodeAt(0) - 55);

}


function Nothing(string) {
    return string;
}

function Lowercase(string) {
    return string.toLowerCase();
}

function Uppercase(string) {
    return string.toUpperCase();
}

function Capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function InvertCapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1).toUpperCase();
}

function TogglePosition(string, pos) {
    pos = convertN(pos);
    if (string.charAt(pos) === string.charAt(pos).toUpperCase()) {
        return string.slice(0, pos) + string.charAt(pos).toLowerCase() + string.slice(pos + 1);
    }
    else if (string.charAt(pos) === string.charAt(pos).toLowerCase()) {
        return string.slice(0, pos) + string.charAt(pos).toUpperCase() + string.slice(pos + 1);
    }
}

function ToggleCase(string) {
    let result = '';
    for (let ch of string) {
        if (ch === ch.toLowerCase()) {
            result += ch.toUpperCase();
        } else {
            result += ch.toLowerCase();
        }
    }
    return result;
}


function Reverse(string) {
    return string.split('').reverse().join('');
}


function Duplicate(string) {
    return string + string;
}
 
function DuplicateWordN(string, n) {
    var tmp = string;
    n = convertN(n);
    for (var i = 0; i < n; i++) {
        tmp += string;
        
    }
    return tmp;
} 



function DuplicateN(string, n) {
    var tmp = "";
    n = convertN(n);
    for (var i = 0; i < n; i++) {
        tmp += string;
        
    }
    return tmp;
} 

function Reflect(string) {
    return string + Reverse(string);
}

function RotateLeft(string) {
    return string.slice(1) + string.charAt(0);
}


function RotateRight(string) {
    return string.charAt(string.length - 1) + string.slice(0, string.length - 1);
}

function AppendCharacter(string, chr) {
    return string + chr;
}

function PrependCharacter(string, chr) {
    return chr + string;
}

function TruncateLeft(string) {
    return string.slice(1);
} 

function TruncateRight(string) {
    return string.slice(0, string.length - 1);
}


function DeleteN(string, n) {
    n = convertN(n);
    return string.slice(0, n) + string.slice(n + 1);
}



function ExtractRange(string, start, end) {
    start = convertN(start);
    end = convertN(end);
    return string.slice(start, start+end);
}

function OmitRange(string, start, end) {
    start = convertN(start);
    end = convertN(end);
    if(start + end>string.length)return string;
    return string.slice(0, start) + string.slice(start + end);
}

function InsertN(string, n, chr) {
    n = convertN(n);
    if(n>string.length)
    {
        return string;
    }
    return string.slice(0, n) + chr + string.slice(n);
}

function OverwriteN(string, n, chr) {
    n = convertN(n);
    if (n >= string.length) return string;
    return string.slice(0, n) + chr + string.slice(n + 1);
}

function TruncateN(string, n) {
    n = convertN(n);
    return string.slice(0, n);
}


function Replace(string, find, replace) {
    return string.replaceAll(find, replace);
}


function Purge(string, chr) {
    return Replace(string, chr, '');
}

function DuplicateFirstN(string, n) {
    n = convertN(n);
    return DuplicateN(string.charAt(0), n) + string;
}

function DuplicateLastN(string, n) {
    n = convertN(n);
    if (string.length === 0) return string;
    return string +DuplicateN(string.charAt(string.length - 1), n);
}

function DuplicateAll(string) {
    var result = '';
    var length = string.length;
    for (var i = 0; i < length; i++) {
        result += string.charAt(i) + string.charAt(i);
    }
    return result;
}


function SwapFront(string)
{
    if (string.length < 2) {
        return string; 
    }
    return string[1] + string[0] + string.slice(2);
}

function SwapBack(string)
{
   if (string.length < 2) {
    return string;
  }
  return string.slice(0, -2) + string[string.length - 1] + string[string.length - 2];
}


function SwapPosition(string, n, m) {
    n = convertN(n);
    m = convertN(m);
  if (n < 0 || m < 0 || n >= string.length || m >= string.length) {
    return string;
  }
  if (n === m) {
    return string;
  }

  let arr = string.split("");
  [arr[n], arr[m]] = [arr[m], arr[n]]; 
  return arr.join("");
}


function BitwiseShiftLeft(string, n) {
  n = convertN(n);
  if (n < 0 || n >= string.length) {
    return string;
  }
  let arr = string.split("");
  let code = arr[n].charCodeAt(0);
  arr[n] = String.fromCharCode(code << 1);
  return arr.join("");
}

function BitwiseShiftRight(string, n) {
    n = convertN(n);
  if (n < 0 || n >= string.length) {
    return string;
  }
  let arr = string.split("");
  let code = arr[n].charCodeAt(0);
  arr[n] = String.fromCharCode(code >> 1);
  return arr.join("");
}


function ASCIIIncrement(string, n) {

  n = convertN(n);  

  if (n < 0 || n >= string.length) {
    return string;
  }
  let arr = string.split("");
  arr[n] = String.fromCharCode(arr[n].charCodeAt(0) + 1);
  return arr.join("");
}

function ASCIIDecrement(string, n) {
  n = convertN(n);  

  if (n < 0 || n >= string.length) {
    return string;
  }
  let arr = string.split("");
  arr[n] = String.fromCharCode(arr[n].charCodeAt(0) - 1);
  return arr.join("");
}

//TODO the hashcat rules are not very clear about this rules, need further research
function ReplacePlus(string, n) {
  n = convertN(n);  

  if (n < 0 || n >= string.length-1) {
    return string;
  }
  let arr = string.split("");
  arr[n] = arr[n+1];
  return arr.join("");
}
function ReplaceMinus(string, n) {
  n = convertN(n);  

  if (n < 0 || n >= string.length) {
    return string;
  }
  let arr = string.split("");
  arr[n] = arr[n-1];
  return arr.join("");
}


function DuplicateLastNChars(string, n) {
    n = convertN(n);  
  if (n <= 0 || n > string.length) {
    return string;
  }
  let suffix = string.slice(-n);
  return string.slice(0, -n) + suffix + suffix;
}


function DuplicateFirstNChars(string, n) {
    n = convertN(n);  
  if (n <= 0 || n > string.length) {
    return string;
  }
  let prefix = string.slice(0, n);
  return prefix + prefix + string.slice(n);
}


function CapitalizeAfterSeparator(string, separator) {
  string = string.toLowerCase();

  let result = "";
  let makeUpper = true;

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (makeUpper && /[a-z]/i.test(ch)) {
      result += ch.toUpperCase();
      makeUpper = false;
    } else {
      result += ch;
    }

    if (ch === separator) {
      makeUpper = true;
    }
  }

  return result;
}

function CapitalizeWords(string) {
  string = string.toLowerCase();

  return string
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}




export function applyRule(string, rule) {
    if (rule.trim().charAt(0) === '#') return false;
    if (rule.trim().length === 0) return false;
    for (var i = 0; i < rule.length;) {
        switch (rule.charAt(i)) {
            case ':':
                string = Nothing(string);
                i++;
                break;
            case 'l':
                string = Lowercase(string);
                i++;
                break;
            case 'u':
                string = Uppercase(string);
                i++;
                break;
            case 'c':
                string = Capitalize(string);
                i++;
                break;
            case 'C':
                string = InvertCapitalize(string);
                i++;
                break;
            case 't':
                string = ToggleCase(string);
                i++;
                break;
            case 'T':
                if(i+1>=rule.length)break;
                string = TogglePosition(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'r':
                string = Reverse(string);
                i++;
                break;
            case 'd':
                string = Duplicate(string);
                i++;
                break;
            case 'p':
                if(i+1>=rule.length)break;
                string = DuplicateWordN(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'f':
                string = Reflect(string);
                i++;
                break;
            case '{':
                string = RotateLeft(string);
                i++;
                break;
            case '}':
                string = RotateRight(string);
                i++;
                break;
            case '$':
                if(i+1>=rule.length)break;
                string = AppendCharacter(string, rule.charAt(i + 1));
                i += 2;
                break;
            case '^':
                if(i+1>=rule.length)break;
                string = PrependCharacter(string, rule.charAt(i + 1));
                i += 2;
                break;
            case '[':
                string = TruncateLeft(string);
                i++;
                break;
            case ']':
                string = TruncateRight(string);
                i++;
                break;
            case 'D':
                if(i+1>=rule.length)break;
                string = DeleteN(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'x':
                if(i+2>=rule.length)break;
                string = ExtractRange(string, rule.charAt(i + 1), rule.charAt(i + 2));
                i += 3;
                break;
            case 'O':
                if(i+2>=rule.length)break;
                string = OmitRange(string, rule.charAt(i + 1), rule.charAt(i + 2));
                i += 3;
                break;
            case 'i':
                if(i+2>=rule.length)break;
                string = InsertN(string, rule.charAt(i + 1), rule.charAt(i + 2));
                i += 3;
                break;
            case 'o':
                if(i+2>=rule.length)break;
                string = OverwriteN(string, rule.charAt(i + 1), rule.charAt(i + 2));
                i += 3;
                break;
            case '\'':
                if(i+1>=rule.length)break;
                string = TruncateN(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 's':
                if(i+2>=rule.length)break;
                string = Replace(string, rule.charAt(i + 1), rule.charAt(i + 2));
                i += 3;
                break;
            case '@':
                if(i+1>=rule.length)break;
                string = Purge(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'z':
                if(i+1>=rule.length)break;
                string = DuplicateFirstN(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'Z':
                if(i+1>=rule.length)break;
                string = DuplicateLastN(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'q':
                string = DuplicateAll(string);
                i++;
                break;

            case 'k':
                string = SwapFront(string);
                i++;
                break;


            case 'K':
                string = SwapBack(string);
                i++;
                break;
            case '*':
                if(i+2>=rule.length)break;
                string = SwapPosition(string, rule.charAt(i + 1), rule.charAt(i + 2));
                i += 3;
                break;

            case 'L':
                if(i+1>=rule.length)break;
                string = BitwiseShiftLeft(string, rule.charAt(i + 1));
                i += 2;
                break;

            case 'R':
                if(i+1>=rule.length)break;
                string = BitwiseShiftRight(string, rule.charAt(i + 1));
                i += 2;
                break;
            case '+':
                if(i+1>=rule.length)break;
                string = ASCIIIncrement(string, rule.charAt(i + 1));
                i += 2;
                break;
            case '-':
                if(i+1>=rule.length)break;
                string = ASCIIDecrement(string, rule.charAt(i + 1));
                i += 2;
                break;
            
            case '.':
                string = ReplacePlus(string, rule.charAt(i + 1));
                i += 2;
                break;

            case ',':
                string = ReplaceMinus(string, rule.charAt(i + 1));
                i += 2;
                break;
          
            case 'y':
                if(i+1>=rule.length)break;
                string = DuplicateFirstNChars(string, rule.charAt(i + 1));
                i += 2;
                break;
            case 'Y':
                if(i+1>=rule.length)break;
                string = DuplicateLastNChars(string, rule.charAt(i + 1));
                i += 2;
                break;


             case 'e':

                if(i+1>=rule.length)break;

                string = CapitalizeAfterSeparator(string, rule.charAt(i + 1));
                i += 2;
                break;

             case 'E':


                string = CapitalizeWords(string);
                i++;
                break;


            default:
                i++;
                break;
        }



    }

    return string;

}
