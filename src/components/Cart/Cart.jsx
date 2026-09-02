import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import useAppContext from '../../hooks/useAppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCartVisible } = useAppContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <aside className={`cart ${isCartVisible ? 'cart--active' : ''}`} aria-label="Carrinho de compras">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="cart__empty">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        )}
      </div>

      <footer className="cart-resume">
        <p className="cart-resume__items">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</p>
        <p className="cart-resume__total">{formatCurrency(totalPrice)}</p>
      </footer>
    </aside>
  );
}

export default Cart;
