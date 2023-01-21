//here, users can run and provide the breed name to. 
//It will then require the breedFetcher file and call its exported function.

const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  error ? console.log('Error fetch details:', error) : console.log(desc);
});