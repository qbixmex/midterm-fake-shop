class Product {

  /**
   * @param {number} id The product id.
   * @param {string} title The product title.
   * @param {number} price The product price.
   * @param {string} description The product description.
   * @param {string} image The product image: 'iphone.jpg', 'acteck-mouse.jpg'
   */
  constructor(id, title, price, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }

}

export default Product;
