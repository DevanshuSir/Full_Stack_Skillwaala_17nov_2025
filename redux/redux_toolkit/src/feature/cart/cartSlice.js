import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartValue:[]
}

export const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartValue.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer