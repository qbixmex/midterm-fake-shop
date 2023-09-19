import Product from './Product.js';
import ProductItem from './ProductItem.js';

class App {
  constructor() {
    this.product = new Product(
      1,
      'Iphone X Mega Ultra',
      2_575.45,
      'The best phone ever since now with the best technology ...',
      'iphone-x-mega-ultra.jpg'
    );
    this.productItem = new ProductItem(this.product);
  }
}

const app = new App();

app.productItem.addToCart();
console.log(app.productItem.render());