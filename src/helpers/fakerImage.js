const faker = require('faker');

export default function generateRandomImageURL() {
  return faker.image.city();
}
