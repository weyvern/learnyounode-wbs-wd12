const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, (err, data) => {
  if (err) return console.log(err);
  const newLines = data.toString().split('\n').length - 1;
  console.log(newLines);
});
