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
  const data = await response.json();
  return data;
}

/**
 * Gets products from local mock data.
 * @returns {Promise<ProductResponse[]>}
 */
export const getProductsAPIDevelopment = () => {
  return productsMock;
}