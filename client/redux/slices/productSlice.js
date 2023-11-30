// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [],
  searchText:"",
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    getProducts: (state, action) => {
       state.products = action.payload;
    },

    removeProduct: (state, action) => {
     const result = state.products.filter(product => product._id !== action?.payload);
      state.products = result;
    },

    searchItems: (state, action) => {
      state.searchText = action.payload;
   },

  },
});

export const { getProducts, removeProduct, searchItems } = productSlice.actions;
export default productSlice.reducer;
