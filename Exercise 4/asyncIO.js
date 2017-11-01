var fs = require('fs');

//var buf = fs.readFileSync(process.argv[2]);

var str = "" // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
      if(err) { }
      str = fileContents.toString();
      //console.log(fileContents.toString());
      var res = str.split('\n');
      console.log(res.length-1);
  });
}

addOne();
