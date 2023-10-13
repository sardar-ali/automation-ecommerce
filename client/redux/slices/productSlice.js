// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: []
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
       state.products = action.payload;
    },

  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
