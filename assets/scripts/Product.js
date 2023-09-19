class Product {

  /** @type {number} */
  #id;

  /** @type {string} */
  #title;

  /** @type {number} */
  #price;

  /** @type {string} */
  #description;

  /** @type {string} */
  #image;

  /**
   * @param {number} id The product id.
   * @param {string} title The product title.
   * @param {number} price The product price.
   * @param {string} description The product description.
   * @param {string} image The product image: 'iphone.jpg', 'acteck-mouse.jpg'
   */
  constructor(
    id = null,
    title = null,
    price = null,
    description = null,
    image = null,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  //* ===================== SETTERS =====================

  /**
   * Sets product identifier.
   * @param {number} id
   * @returns {void}
   **/
  set id(value) {
    if (value === null) {
      throw new Error('ID is mandatory !');
    }

    if (typeof value !== 'number') {
      throw new Error('ID must be a number type !');
    }

    if (value < 0) {
      throw new Error('ID must be a positive number !');
    }

    this.#id = value;
  }

  /**
   * Sets products title.
   * @param {string} title
   * @returns {void}
   */
  set title(value) {
    if (value === null) {
      throw new Error('Title is mandatory !');
    }

    if (value === '') {
      throw new Error('Title cannot be empty !');
    }

    if (value.length < 6) {
      throw new Error('Title must be greater or equals to 6 characters!');
    }

    this.#title = value;
  }

  /**
   * Sets product price.
   * @param {number} price
   * @returns {void}
   */
  set price(value) {
    if (value === null) {
      throw new Error('Price is mandatory !');
    }

    if (typeof value != 'number') {
      throw new Error('Price must be a number type !');
    }

    if (value < 0) {
      throw new Error('Price must be a positive number !');
    }

    this.#price = value;
  }

  /**
   * Sets product description.
   * @param {string} description
   * @returns {void}
   */
  set description(value) {
    if (value === null) {
      throw new Error('Description is mandatory !');
    }

    if (value === '') {
      throw new Error('Description cannot be empty !');
    }

    if (value.length < 8) {
      throw new Error('Description must be greater or equals to 8 characters!');
    }

    this.#description = value;
  }

  /**
   * Sets product image.
   * @param {string} value
   * @returns {void}
   */
  set image(value) {
    if (value === null) {
      throw new Error('Image is mandatory !');
    }

    if (value === '') {
      throw new Error('Image cannot be empty !');
    }

    this.#image = value;
  }

  //* ===================== GETTERS =====================

  /** @returns {number} */
  get id() {
    return this.#id;
  }

  /** @returns {number} */
  get title() {
    return this.#title;
  }

  /** @returns {number} */
  get price() {
    return this.#price;
  }

  /** @returns {string} */
  get description() {
    return this.#description;
  }

  /** @returns {string} */
  get image() {
    return this.#image;
  }

  get product() {
    return this;
  }
}

export default Product;
