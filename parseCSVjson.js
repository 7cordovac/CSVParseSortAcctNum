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

//SORTS DATA BY PRINTEDIPS
   console.log(arr.sort(compare));

   function compare(a,b) {

      return a.printedIP - b.printedIP;


   // function compare(a, b) {
   //    if (a.printedIP < b.printedIP)
   //       return -1;
   //       if (a.printedIP > b.printedIP)
   //       return 1;
   //       return 0;

      }
   });
//read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);




//
// var inputFile='inputtest.csv';
//
// fs.readFile('inputtest.csv',"utf8", function read(err, data) {
//    if (err) {
//        throw err;
//    }
// });
//
//
// var arr =[];
//
// var parser = parse({delimiter: ","}, function (err, data) {
//     data.forEach(function(record) {
//
//    var list = {"printedIP" : record[0],
//                     "regionNo" : record[1],
//                     "firstName" : record[2],
//                     "lastName" : record[3],
//                     "mailingAddress" : record[4],
//                     "city" : record[5],
//                     "state" : record[6],
//                     "zipCode" : record[7],
//                     "yearOfMembership" : record[8],
//                  };
//
//
//  var firstChar = list[0];
//  if (!Number.isInteger(firstChar)) {
//      list = list.substr(1);
//  }
//
//                  arr.push(list);
//
// });
//
//
//
//      console.log(arr.sort(compare));
//     });
//
//     function compare(a,b) {
//      if (a.printedIP < b.printedIP)
//         return -1;
//      if (a.printedIP > b.printedIP)
//         return 1;
//   return 0;
//     }
//
//
// // read the inputFile, feed the contents to the parser
//fs.createReadStream(inputFile).pipe(parser);


// var inputString = 'a4545' // whatever the user entered
//var firstChar = inputString[0];
//if (!Number.isInteger(firstChar)) {
//inputString = inputString.substr(1)
//}
