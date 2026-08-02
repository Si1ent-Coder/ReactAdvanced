// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value:0,
// }

// export const CounterSlice = createSlice(
//     {
//         name:"counter",
//         initialState,
//         reducers : {
//             increment : (state) =>{
//                 state.value +=1;
//             },
//             decrement: (state) =>{
//                 state.value -=1;
//             }
//         }
//     }
// )

// export const {increment,decrement} = CounterSlice.actions;
// export default CounterSlice.reducer;



// now from Here



import React from "react";
import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            add:(state,action) =>{
                state.push(action.payload);
            },
            remove:(state,action)=>{
                return state.filter((item)=> item.id != action.payload);
            },
        }
    }
    
)

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;


