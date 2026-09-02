import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import useAppContext from '../../hooks/useAppContext';

function ProductCard({ product }) {
  const { title, thumbnail, price } = product;
  const { addToCart } = useAppContext();

  return (
    <article className="product-card">
      <img src={thumbnail} alt={title} className="card__image" />

      <div className="card__infos">
        <p className="card__price">{formatCurrency(price)}</p>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={() => addToCart(product)}
        aria-label={`Adicionar ${title} ao carrinho`}
      >
        <BsFillCartPlusFill />
      </button>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
