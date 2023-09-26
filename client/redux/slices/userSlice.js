// slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
    },
    reducers: {
        addUser: (state) => {
            state.user = state;
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
