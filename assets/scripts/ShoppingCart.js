import { Navbar, ProductRows, Alert } from './components/index.js';
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
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      this.total = cart.total;
      this.items = cart.items;
    }

    this.items.push(product);

    $('#total-price').text(`$ ${formatPrice(this.getTotal())}`);

    localStorage.setItem('cart', JSON.stringify({
      items: this.items,
      total: this.total,
    }));

    $('#summary tbody').empty().append(
      ProductRows({ items: this.items, total: this.total })
    );

    $('#cart-price span').text(`$ ${formatPrice(this.total)}`);

  }

  /**
   * Clear cart
   * @returns {void}
   */
  clearOrder() {
    this.items = [];
    this.total = 0;
    localStorage.removeItem('cart');
    $('#total-price').text('$ 0.00');
    $('#summary tbody')
      .empty()
      .append('<tr>'
        + '<td colspan="3">'
        + '<div class="mt-3">'
        + Alert("There's no products added yet !", 'warning')
        + '</div>'
        + '</td>'
        + '</tr>'
      );
    $('#cart-price span').text('$ 0.00');
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
