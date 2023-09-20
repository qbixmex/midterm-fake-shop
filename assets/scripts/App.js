import ProductList from './ProductList.js';

class App {
  constructor() {
    this.productList = new ProductList();
  }
}

const app = new App();

app.productList.render();
