import Product from './Product.js';

/** @typedef {import('../../types').ProductType} ProductType */

class ProductItem extends Product {

  /**
   * @param {ProductType} product - Product object.
   */
  constructor({id, title, price, description, image}) {
    super(id, title, price, description, image);
  }

  //* ===================== METHODS =====================

  /**
   * Adds a product to shopping cart.
   * @returns {string} A successful message.
   */
  addToCart() {
    console.log({
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      image: this.image,
    });
    return 'Product Added to Cart !';
  }

  /**
   * Gets string HTML output.
   * @returns {string} - HTML table string.
   */
  render() {
    let output = '';
    output += '<table>'
    output += '<body>'
    output += '<tr>'
    output += '<th>ID</th>'
    output += `<td>${this.product.id}</td>`
    output += '</tr>'
    output += '<tr>'
    output += '<th>Title</th>'
    output += `<td>${this.product.title}</td>`
    output += '</tr>'
    output += '<tr>'
    output += '<th>Price</th>'
    output += `<td>${this.product.price}</td>`
    output += '</tr>'
    output += '<tr>'
    output += '<th>Description</th>'
    output += `<td>${this.product.description}</td>`
    output += '</tr>'
    output += '<tr>'
    output += '<th>Image</th>'
    output += `<td>${this.product.image}</td>`
    output += '</tr>'
    output += '<body>'
    output += '</table>';
    return output;
  }

}

export default ProductItem;

const productItem = new ProductItem({
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
});

productItem.addToCart();

console.log("Program Stops");

