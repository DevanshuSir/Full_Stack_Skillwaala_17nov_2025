import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../feature/counter/counterSlice"
import formReducer from "../feature/form/formSlice"
import cartReducer from "../feature/cart/cartSlice"


export const store = configureStore({
    reducer:{
        Counts:counterReducer,
        Form:formReducer,
        Cart:cartReducer
    },
})



