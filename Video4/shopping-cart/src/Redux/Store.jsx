// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./Slices/cartSlice";


// export const store = configureStore({
    //     reducer: {
        //         counter:counterReducer,
        //     },
        // });
        
        
        
        // Now From Here
        
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";


export const store = configureStore(
    {
        reducer:{
            cart: cartReducer,
        },
    }
);