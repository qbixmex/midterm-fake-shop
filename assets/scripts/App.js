import Shop from './Shop.js';
import { formatPrice } from './helpers/format.js';
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

        button.setAttribute('disabled', true);

        this.addProductToCart(product);

        setTimeout(() => {
          button.removeAttribute('disabled');
        }, 1000);
      });
    });

    const clearCartBtn = document.getElementById('clear-cart');

    clearCartBtn.addEventListener('click', () => {
      this.shop.ShoppingCart.clearOrder();
    });

    if (localStorage.getItem('cart')) {
      const totalPrice = JSON.parse(localStorage.getItem('cart')).total;
      $('#total-price').text(`$ ${formatPrice(totalPrice)}`);
    }
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
    this.shop.ShoppingCart.addToCart(product);
    this.shop.displayToast();
  }

}

new App().init();
