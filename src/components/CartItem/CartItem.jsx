import React from 'react';
import PropTypes from 'prop-types';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import useAppContext from '../../hooks/useAppContext';

function CartItem({ item }) {
  const { id, thumbnail, title, price, quantity } = item;
  const { removeFromCart, updateQuantity } = useAppContext();

  const handleDecrease = () => updateQuantity(id, quantity - 1);
  const handleIncrease = () => updateQuantity(id, quantity + 1);

  return (
    <article className="cart-item">
      <img src={thumbnail} alt={title} className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-price">{formatCurrency(price * quantity)}</p>

        <div className="cart-item-quantity">
          <button
            type="button"
            className="cart-item-quantity__button"
            onClick={handleDecrease}
            aria-label={`Diminuir quantidade de ${title}`}
          >
            <BsCartDashFill />
          </button>

          <span className="cart-item-quantity__value">{quantity}</span>

          <button
            type="button"
            className="cart-item-quantity__button"
            onClick={handleIncrease}
            aria-label={`Aumentar quantidade de ${title}`}
          >
            <BsCartPlusFill />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="button__remove-item"
        onClick={() => removeFromCart(id)}
        aria-label={`Remover ${title} do carrinho`}
      >
        ×
      </button>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
