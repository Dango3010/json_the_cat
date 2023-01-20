const request = require('request');

//codes to test out if the request library has been successfully required:
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// });

//get the description from API server based on breed name:
const BreedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${BreedName}`;
// const url = `https://api.dddd.com/v1/flsfs/search?q=${BreedName}`; //breaking domain name to test the error feature
request(url, function (error, response, body) {
  if (error) return console.log('error message:', error);
  const data = JSON.parse(body);
  if (!data[0]) return console.log("a breed name is required or not found");
  //when the breed name is empty or not found
  return console.log(data[0].description);
});
