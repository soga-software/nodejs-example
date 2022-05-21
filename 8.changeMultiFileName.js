var fs = require("fs");
var path = require('path');
var __path = `C://Users//lebui//Downloads`;
console.log("Going to read directory /tmp");
fs.readdir(__path,function(err, files) {
   if (err) {
      return console.error(err);
   }
   var i = 1;
   files.forEach( function (file) {
       if(path.extname(file)==='.mp4'){
        ++i;
        fs.rename(__path + '/' + file, __path + '/' + 'Chinese cooking part '+ i +'.mp4', function(err) {
            if ( err ) {
                console.log('ERROR: ' + err);
            }
        });
       }        
   });
});