import Shop from './Shop.js';
import ProductItem from './ProductItem.js';
/** @typedef { import('../../types.d.ts').ProductType } ProductType */

class App {
  constructor() {
    this.shop = new Shop();
  }

  /**
   * Initialize App
   * @returns {void}
   */
  init() {
    this.shop.render();

    const products = this.shop.ProductList.products;

    const buttons = document.querySelectorAll('.btn-add-cart');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const product = this.searchProduct(button.id, products);
        this.addProductToCart(product);
      });
    });
  }

  /**
   * Search product by id on provided Products Array.
   * @param {string} id 
   * @param {string[]} products
   * @returns { ProductType | undefined } The founded product.
   */
  searchProduct(id, products) {
    return products.find((product) => {
      const [,productId] = id.split('-');
      return product.id == productId;
    });
  }

  /**
   * Add product to shopping cart.
   * @param { ProductType } product The product object.
   * @returns { void }
   */
  addProductToCart(product) {
    // add the product to the cart by calling the addToCart
    // method of Cart class
    this.shop.ShoppingCart.addToCart(product);
  }

}

new App().init();
