import ProductList from './ProductList.js';

class App {
  constructor() {
    this.productList = new ProductList();
  }
  init() {
    // initialize the app by creating instance of Shop class and calling the render method of the Shop class
  }
  addProductToCart() {
    // add the product to the cart by calling the addToCart method of Cart class
  }
}

const app = new App();

app.productList.render();
