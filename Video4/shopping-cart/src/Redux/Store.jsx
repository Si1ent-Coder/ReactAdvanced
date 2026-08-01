import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/cartSlice";

export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
});