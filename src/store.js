import { configureStore } from '@reduxjs/toolkit';
import websiteReducer from './reducers/slices/website.slice';
import cartReducer from './reducers/slices/cart.slice';
import userReducer from './reducers/useReducers';
export const store = configureStore({
  reducer: {
    website: websiteReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
