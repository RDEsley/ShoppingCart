import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import { cartReducer, initialState, cartActions } from './cartReducer';

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const actions = useMemo(
    () => ({
      setProducts: (products) => dispatch({ type: cartActions.SET_PRODUCTS, payload: products }),
      setLoading: (loading) => dispatch({ type: cartActions.SET_LOADING, payload: loading }),
      setError: (error) => dispatch({ type: cartActions.SET_ERROR, payload: error }),
      toggleCart: () => dispatch({ type: cartActions.TOGGLE_CART }),
      addToCart: (product) => dispatch({ type: cartActions.ADD_TO_CART, payload: product }),
      removeFromCart: (productId) =>
        dispatch({ type: cartActions.REMOVE_FROM_CART, payload: productId }),
      updateQuantity: (productId, quantity) =>
        dispatch({ type: cartActions.UPDATE_QUANTITY, payload: { productId, quantity } }),
    }),
    [],
  );

  const value = useMemo(
    () => ({
      ...state,
      ...actions,
    }),
    [state, actions],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
