import ProductList from './ProductList.js';
import ShoppingCart from './ShoppingCart.js';
import { Footer } from './components/index.js';

class Shop {

  constructor() {

    /** @type { ShoppingCart } */
    this.ShoppingCart = new ShoppingCart();

    /** @type { ProductList } */
    this.ProductList = new ProductList();

  }

  /**
   * Render the shop by calling the render method of ProductList
   * and ShoppingCart classes.
   * @return {void}
   */
  render() {

    const section = `
      <header id="header">
        ${ this.ShoppingCart.render() }
      </header>
      <main id="main" class="container text-white">
        <div class="row" id="row">
          ${ this.ProductList.render() }
        </div>
      </main>
      <footer>${ Footer('Shop Toc &copy; 2023') }</footer>
    `;
  
    $("#app").append(section);
  }
}

export default Shop;