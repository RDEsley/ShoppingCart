import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import useAppContext from '../../hooks/useAppContext';

function CartButton() {
  const { cartItems, toggleCart } = useAppContext();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={toggleCart}
      aria-label="Abrir carrinho de compras"
    >
      <AiOutlineShoppingCart />
      {totalItems > 0 && <span className="cart-status">{totalItems}</span>}
    </button>
  );
}

export default CartButton;
