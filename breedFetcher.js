const request = require('request');

//codes to test out if the request library has been successfully required:
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// });

//get the description from API server based on breed name:
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // const url = `https://api.ddfdfdf.com/v1/breeds/search?q=${breedName}`; // used to test the error feature
  let MesError = '';
  let desc = '';
  request(url, function (error, response, body) {
    if (error) {
      MesError = error;
    } else {
      const data = JSON.parse(body);
      !data[0] ? MesError = "a breed name is required or not found" : desc = data[0].description;
    }
    return callback(MesError, desc);
  })
}
module.exports = { fetchBreedDescription };