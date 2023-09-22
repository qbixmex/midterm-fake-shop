import ProductList from './ProductList.js';
import ShoppingCart from './ShoppingCart.js';
import { Alert, Modal, Footer } from './components/index.js';

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
  async render() {
    let cart;

    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      cart = { items: [], total: 0.00 };
    }

    const section = `
      ${ Modal(cart) }
      <header id="header">
        ${ this.ShoppingCart.render() }
      </header>
      <main id="main" class="container text-white">
        <div class="row" id="row">
          ${ await this.ProductList.render()}
        </div>
      </main>
      <footer>${ Footer('Shop Toc &copy; 2023') }</footer>
    `;
  
    $("#app").append(section);
  }

  /**
   * Show Toast notifications.
   * @param {string} message - Message to display in toast.
   * @param {'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'} color Alert snippet color.
   * @returns {void}
   */
  displayToast(message, color) {
    const toast = `<div id="toast">${Alert(message, color)}</div>`;
    $('body').prepend(toast);
    setTimeout(() => {
      $("#alert")
        .animate({ opacity: 0 }, 500)
        .delay(500).queue(function() {
          $(this).remove();
        });
    }, 1000);
  }
}

export default Shop;