import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count : 10
}


export const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
            console.log("Increment")
            state.count += 1
        },
        decrement:(state)=>{
            console.log("Decrement")
            state.count -= 1
        }
    }
})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer


