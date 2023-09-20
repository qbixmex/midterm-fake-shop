import Product from './Product.js';
import { Card } from './components/index.js';

/** @typedef {import('../../types').ProductType} ProductType */

class ProductItem {

  /**
   * @param {ProductType} product - Product object.
   */
  constructor({ id, title, price, description, image }) {
    this.product = new Product(id, title, price, description, image);
  }

  //* ===================== METHODS =====================

  /**
   * Adds a product to shopping cart.
   * @returns {string} A successful message.
   */
  addToCart() {
    console.log(this.product);
    return 'Product Added to Cart !';
  }

  /**
   * Renders Product Item to the DOM.
   * @returns {void} Jquery will append to proper html element.
   */
  render() {
    $(() => {
      const card = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          ${ Card(this.product) }
        </div>
      `;

        $('#row').append(card);
    });
  }

}

export default ProductItem;
