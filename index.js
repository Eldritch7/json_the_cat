const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];
console.log('breed', breed);

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
  
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});