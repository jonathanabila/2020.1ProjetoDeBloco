const faker = require('faker');

function generateRandomCityImageURL() {
  return faker.image.city();
}

function generateRandomFoodImageURL() {
  return faker.image.food();
}

export { generateRandomCityImageURL, generateRandomFoodImageURL };
