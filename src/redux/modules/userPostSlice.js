import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postInfo: {
        postId: 0,
        title: '',
        body: '',
        userInfo: {},
    },
};

export const userPostSlice = createSlice({
    name: 'userPost',
    initialState,
    reducers: {
        postSelected : (state, action) => {
           state.postInfo = action.payload
        }
    }
})
export const { postSelected } = userPostSlice.actions;
export default userPostSlice.reducer;