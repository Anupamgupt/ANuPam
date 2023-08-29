import { createSlice } from "@reduxjs/toolkit"
const initialState="home"
const navSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        page(state,action){
            state=action.payload
            return state
        }
    }
})

export const {page} = navSlice.actions;
export default navSlice.reducer;
