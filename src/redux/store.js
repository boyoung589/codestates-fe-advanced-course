import { configureStore } from "@reduxjs/toolkit";
import userPostReducer from "./modules/userPostSlice";

export const store = configureStore({
    reducer: {
        userPost: userPostReducer,
    }
})