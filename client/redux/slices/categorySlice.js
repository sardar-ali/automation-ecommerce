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
    },
});

export const { getCategories } = categorySlice.actions;
export default categorySlice.reducer;
