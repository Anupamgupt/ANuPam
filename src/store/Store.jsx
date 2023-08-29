import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./NavSlice"


const store = configureStore({
    reducer:{
        page:navReducer
    }
})


export default store