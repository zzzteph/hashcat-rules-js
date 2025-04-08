
const hashcat = require('./dist/hashcat-rules.js');
console.log(hashcat.applyRule("goosebumps","$2$0$2$5T0T5"));
console.log(hashcat.applyRule("hashcat","$2$0$2$5"));
   
