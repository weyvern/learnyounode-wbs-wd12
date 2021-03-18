const fs = require('fs');
const path = require('path');

const filter = (dir, filterStr, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    list = list.filter(file => {
      return path.extname(file) === '.' + filterStr;
    });
    callback(null, list);
  });
};
module.exports = filter;
