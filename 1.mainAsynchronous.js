var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      console.log('Loi roi do cu!');
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});