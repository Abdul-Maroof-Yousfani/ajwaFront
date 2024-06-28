import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  wishlist: null,
  product: null,
};

const websiteSlice = createSlice({
  name: 'website',
  initialState,
  reducers: {
    setWebsiteData: (state, action) => {
      try {
        state.data = action.payload;
      } catch (error) {
        console.error('Failed to set website data:', error);
      }
    },
    addWishlist: (state, action) => {
      try {
        let wishlist = state.wishlist;
        if (!wishlist) {
          wishlist = [];
        }
        wishlist.push(action.payload);
        state.wishlist = wishlist;
      } catch (error) {
        console.error('Failed to add item to wishlist:', error);
      }
    },
    setWishlist: (state, action) => {
      try {
        state.wishlist = action.payload;
      } catch (error) {
        console.error('Failed to set wishlist:', error);
      }
    },
    setProductDetail: (state, action) => {
      try {
        state.product = action.payload;
      } catch (error) {
        console.error('Failed to set product detail:', error);
      }
    },
    
  },
});

export default websiteSlice.reducer;

export const { setWebsiteData, setWishlist, setProductDetail, addWishlist } =
  websiteSlice.actions;

// Selector to get website data from state
export const selectWebsiteData = state => state.website.data;
export const selectWishlistData = state => state.website.wishlist;
export const selectProductData = state => state.website.product;

