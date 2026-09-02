import { mockProducts } from '../data/mockProducts';

const fetchProducts = async (query = '') => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return mockProducts;
  }

  return mockProducts.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery),
  );
};

export default fetchProducts;
