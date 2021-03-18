const fs = require('fs');
const cof = fs.readFileSync(process.argv[2]);
const newLines = cof.toString().split('\n').length - 1;
console.log(newLines);
