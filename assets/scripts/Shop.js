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
  render() {
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
          ${ this.ProductList.render() }
        </div>
      </main>
      <footer>${ Footer('Shop Toc &copy; 2023') }</footer>
    `;
  
    $("#app").append(section);
  }

  /**
   * Show Toast notifications.
   * @returns {void}
   */
  displayToast() {
    $('body').prepend(Alert('Product added to cart', 'success'));
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