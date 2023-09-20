import productsMock from '../data/products.json' assert { type: "json" };

/**
 * @typedef { import('../../types.d.ts').ProductResponse } ProductResponse
 */

/**
 * Gets products from API.
 * @returns {Promise<ProductResponse[]>}
 */
export const getProductsAPI = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
}

/**
 * Gets products from local mock data.
 * @returns {Promise<ProductResponse[]>}
 */
export const getProductsAPIDevelopment = () => {
  return productsMock;
}