import { Navbar } from './components/index.js';
import { formatPrice } from './helpers/format.js';

class ShoppingCart {

  constructor() {
    this.items = [];
    this.total = 0;
  }

  /**
   * Calculate the total price of the items in the cart.
   * @returns {number} The total price.
   */
  getTotal() {
    if (this.items.length > 0) {
      this.total = this.items.reduce((previous, current) => {
        return previous + current.price;
      }, 0);
    }
    return this.total;
  }

  /**
   * Add product to shopping cart.
   * @param { ProductType } product The product object.
   * @returns { void }
   */
  addToCart(product) {
    this.items.push(product);
    $('#total-price').text(`$ ${formatPrice(this.getTotal())}`);
  }

  /**
   * Renders HTML top Navbar and Total.
   * @returns {string} Navbar HTML string.
   */
  render() {
    return Navbar(this.total);
  }

}

export default ShoppingCart;
