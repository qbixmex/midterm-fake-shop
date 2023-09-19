import Product from './Product.js';

class App {
  constructor() {
    console.log('App constructor executed.')
  }
}

const product = new Product(
  1,
  'Iphone X Mega Ultra',
  2_575.45,
  'The best phone ever since now with the best technology ...',
  'iphone-x-mega-ultra.jpg'
);

console.log("ID:", product.id);
console.log("Title:", product.title);
console.log("Price: $", product.price.toLocaleString());
console.log("Description:", product.description);
console.log("Image:", product.image);