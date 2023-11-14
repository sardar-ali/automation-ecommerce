// slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
    },
    reducers: {
        getCategories: (state, action) => {
            console.log("actions ::", action)
            state.categories = action.payload;
        },

        removeCategory: (state, action) => {
            console.log("actions :::", action)
            // Filter out the category to remove based on some identifier (e.g., ID)
           const result = state.categories.filter(category => category._id !== action?.payload);
           console.log("result actions:::", result)
            state.categories = result;
          },
    },
});

export const { getCategories, removeCategory} = categorySlice.actions;
export default categorySlice.reducer;
