import React, { useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../services/productsApi';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import useAppContext from '../../hooks/useAppContext';

const DEFAULT_QUERY = '';

function Products() {
  const { products, loading, error, setProducts, setLoading, setError } = useAppContext();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const results = await fetchProducts(DEFAULT_QUERY);
        setProducts(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [setProducts, setLoading, setError]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <section className="products container">
        <p className="products__message products__message--error">{error}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="products container">
        <p className="products__message">Nenhum produto encontrado.</p>
      </section>
    );
  }

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
