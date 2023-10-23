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

    removeProduct: (state, action) => {
      console.log("actions :::", action)
      // Filter out the products to remove based on some identifier (e.g., ID)
     const result = state.products.filter(product => product._id !== action?.payload);
     console.log("result actions:::", result)
      state.products = result;
    },

  },
});

export const { getProducts, removeProduct } = productSlice.actions;
export default productSlice.reducer;
