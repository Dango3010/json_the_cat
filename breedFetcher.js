const request = require('request');

//codes to test out if the request library has been successfully required:
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// });

//get the description from API server based on breed name:
const BreedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${BreedName}`;
request(url, function (error, response, body) {
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('a breed name is required');
  } else {
    console.log(data[0].description);
  }
});

// const FindBreadByName = function(name, callback) {
//   const url   = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
//   request (url, (error, response, body) => {
//     const data = JSON.parse(body);
//     let errorMes = error;
//     let description = data[0].description;
//     return callback(errorMes, description);
//   })
// };