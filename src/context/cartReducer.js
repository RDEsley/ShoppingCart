export const initialState = {
  products: [],
  cartItems: [],
  loading: true,
  isCartVisible: false,
  error: null,
};

export const cartActions = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
};

export function cartReducer(state, action) {
  switch (action.type) {
  case cartActions.SET_PRODUCTS:
    return { ...state, products: action.payload, error: null };

  case cartActions.SET_LOADING:
    return { ...state, loading: action.payload };

  case cartActions.SET_ERROR:
    return { ...state, error: action.payload, loading: false };

  case cartActions.TOGGLE_CART:
    return { ...state, isCartVisible: !state.isCartVisible };

  case cartActions.ADD_TO_CART: {
    const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

    if (existingItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }

    return {
      ...state,
      cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
    };
  }

  case cartActions.REMOVE_FROM_CART:
    return {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };

  case cartActions.UPDATE_QUANTITY: {
    const { productId, quantity } = action.payload;

    if (quantity <= 0) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };
    }

    return {
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    };
  }

  default:
    return state;
  }
}
