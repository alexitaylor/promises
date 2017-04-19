/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

 /*
=======================================================
Checkout following links for  promises implementation
https://scotch.io/tutorials/javascript-promises-for-dummies
&
https://developers.google.com/web/fundamentals/getting-started/primers/promises

Useful links for fs.read:
http://stackoverflow.com/questions/10058814/get-data-from-fs-readfile
=======================================================
*/

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(error, data) {
      if (!error) {
        var firstLine = data.split('\n')[0];
        resolve(firstLine);
      } else {
        reject(error);
      }
    });
  });
  return promise;
};

// This function should retrieve the status code of a GET request to `url`

/*
=======================================================
Checkout request for below request.get implementation
https://www.npmjs.com/package/request
=======================================================
*/
var getStatusCodeAsync = function(url) {
  var promise = new Promise(function(resolve, reject) {
    request.get(url, function(error, response, body) {
      if (!error) {
        resolve(response.statusCode);
      } else {
        reject(error);
      }
    });
  });
  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};


// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…

//   if (everything turned out fine) {
//     resolve("Stuff worked!");
//   } else {
//     reject(Error("It broke"));
//   }
// });
