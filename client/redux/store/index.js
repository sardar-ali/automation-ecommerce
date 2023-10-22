// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../slices/userSlice"
import categoryReducer from "../slices/categorySlice"
import productReducer from "../slices/productSlice"
import cartReducer from "../slices/cartSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    category:categoryReducer,
    product:productReducer,
  },
});

export default store;
