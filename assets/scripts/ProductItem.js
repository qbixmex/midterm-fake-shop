import Product from './Product.js';

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
      $('#list').append(`<li>${this.product.id} - ${this.product.title}</li>`);
    });
  }

}

export default ProductItem;
