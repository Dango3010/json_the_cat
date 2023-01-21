const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai');

describe(fetchBreedDescription, () => {
  it('return a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      assert.equal(error, null);
      const descExp = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(descExp, desc.trim());
      done(); //used done() in each Mocha test to let the framework know when each test was completed.
    });
  });
  it('return an error message when a non-existent/invalid breed is entered', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      assert.equal(error, errorExp);
      const errorExp = "a breed name is required or not found";
      assert.equal(desc, null);
    });
  });
});






