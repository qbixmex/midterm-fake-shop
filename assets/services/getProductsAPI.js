import productsMock from '../data/products.json' assert { type: "json" };

export const getProductsAPI = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
}

export const getProductsAPIDevelopment = () => {
  return productsMock;
}