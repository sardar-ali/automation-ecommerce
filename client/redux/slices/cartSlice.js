// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("action.payload ::", action.payload)
      const existingProduct = state?.cartItems?.find((item) => item._id === action.payload._id);
      if (!existingProduct) {
        state?.cartItems?.push(action.payload);
      }
    },

    increaseCartItemQuantity: (state, action) => {
     let ind = state?.cartItems?.findIndex(item => item._id === action?.payload._id)
      if ( ind !==-1) {
        console.log("state.cartItems[ind]", state.cartItems[ind])
        state.cartItems[ind].quantity += 1
      }
    },

    removeFromCart: (state, action) => {
      const allProduct = state?.cartItems?.filter((item) => item._id !== action?.payload?._id);
      state.cartItems = allProduct;
    },

    decreaseCartItemQuantity: (state, action) => {
      const existingProduct = state?.cartItems?.find((item) => item._id === action.payload._id);
      if (existingProduct ) {
        existingProduct.quantity -= 1;
      }
    },

  },
});

export const { addToCart, increaseCartItemQuantity, removeFromCart, decreaseCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
