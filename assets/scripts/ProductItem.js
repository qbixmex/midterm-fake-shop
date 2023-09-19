/**
 * @typedef {import('../../types').ProductType} ProductType
 */

class ProductItem {

  /** @type {ProductType} */
  #product;

  /**
   * @param {ProductType} product 
   */
  constructor(product) {
    this.product = product;
  }

  //* ===================== SETTERS =====================

  /**
   * Set product
   * @param {ProductType} object
   * @returns {void}
   */
  set product(object) {
    if (typeof object !== 'object') {
      throw new Error('You must pass a Product instance !');
    }
    this.#product = object;
  }

  /**
   * Gets the product instance.
   * @returns {ProductType}
   */
  get product() {
    return this.#product;
  }

  /**
   * Adds a product to shopping cart.
   * @returns {void}
   */
  addToCart() {
    // just console.log the product for now
    console.log("ID:", this.product.id);
    console.log("Title:", this.product.title);
    console.log("Description:", this.product.description);
    console.log("Image:", this.product.image);
    console.log("Price: $", this.product.price.toLocaleString());
  }

  render() {
    // return the product element with the product data (<li>)
    return `<li>${this.#product.title}</li>`;
  }

}

export default ProductItem;
