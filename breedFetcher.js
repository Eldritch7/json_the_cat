const request = require("request");
//const breed = process.argv.slice(2);


const fetchBreedDescription = function(breed, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {

    
    console.log(error);

    if (error) {
      callback(error);
      return;
    } else {
      const data = JSON.parse(body);
      console.log('data', data);
      const breed = data[0];
      if (breed) {
        callback(null, data[0]["description"]);

      } else {
        callback("breed not found");
      }
      

      return;
    }





  });

};
module.exports = { fetchBreedDescription };
/*
request(url, (error, response, body) => {

  
  //console.log('statusCode:', response && response.statusCode);
  //console.log(`body:`, body);
  //console.log(`error`, error);
  //console.log(`type of body:`, typeof body);
  const data = JSON.parse(body);

  
 
  if (response.statusCode === 404) {
    console.log(`error:`, body);
    return;
  } else if (data[0] === undefined) {
    console.log(`${breed} was not found in database.`);
    return;
  }
  //console.log(`data:`, data);
  //console.log(`type of data:`, typeof data);
  console.log(`description`, data[0]["description"]);
  return;




});
*/
