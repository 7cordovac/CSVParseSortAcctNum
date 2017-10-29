var fs = require("fs");
var parse = require('csv-parse');

var inputFile = 'inputtest.csv';

fs.readFile('inputtest.csv', "utf8", function read(err, data) {
   if (err) {
      throw err;
   }
   content = data;
});

var arr = [];

var parser = parse({
   delimiter: ","
}, function(err, data) {

   data.forEach(function(record) {
      // create list object out of parsed fields
      var list = {
         "printedIP": record[0],
         "regionNo": record[1],
         "firstName": record[2],
         "lastName": record[3],
         "mailingAddress": record[4],
         "city": record[5],
         "state": record[6],
         "zipCode": record[7],
         "yearOfMembership": record[8],
      };

// (record[0][0] is 1st char of printedIP
      var firstChar = record[0][0];

      if (!isNaN(firstChar)) {
       arr.push(list);
      }
      else
      {
      var removeAlpha = list.printedIP.replace(/[^\d.-]/g, '');
         list.printedIP = removeAlpha;
         arr.push(list);
      }
   });

//sorts data by printedIP
   console.log(arr.sort(compare));

   function compare(a,b) {
      return a.printedIP - b.printedIP;
      }
   });
   
//read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);


