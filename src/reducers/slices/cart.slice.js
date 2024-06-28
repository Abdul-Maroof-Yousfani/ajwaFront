import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingCart: [],
  checkoutDetails: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    setCarts: (state, action) => {
      try {
        state.shoppingCart = action.payload;
      } catch (error) {
        console.log(error);
      }
    },
    addToCarts: (state, action) => {
      const payload = action.payload;

      if (!payload) return state;

      const itemInCart = state.shoppingCart.find(
        item => item._id === payload.productId
      );

      if (itemInCart) {
        state.shoppingCart = state.shoppingCart.map(item =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity + payload.quantity }
            : item
        );
      } else {
        state.shoppingCart = [...state.shoppingCart, { ...payload }];
      }
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.shoppingCart.find(item => item.productId === itemId);

      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.shoppingCart.find(item => item.productId === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.shoppingCart = state.shoppingCart.filter(
        item => item.productId !== itemId
      );
    },
    setCheckoutDetails: (state, action) => {
      state.checkoutDetails = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCarts,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setCarts,
  setCheckoutDetails,
} = cartSlice.actions;

// Selector to get website data from state
export const selectCartData = state => state.cart.shoppingCart;
export const selectCheckoutDetails = state => state.cart.checkoutDetails;
