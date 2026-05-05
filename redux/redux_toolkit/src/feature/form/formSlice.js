import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list:[]
}

export const formSlice = createSlice({
    name:"UserInput",
    initialState,
    reducers:{
        addText:(state,action)=>{ 
           state.list.push(action.payload)
        },
        deleteText:(state,action)=>{
            state.list = state.list.filter((item,index)=>index !== action.payload)
        }
    }
})
 
export const {addText,deleteText} = formSlice.actions
export default formSlice.reducer