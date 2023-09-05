import { createSlice } from "@reduxjs/toolkit";


const initialState  = {
    count : 0,
    isProductInsideCart : false
}
const slice = createSlice({
    name :'cartState',
    initialState,
    reducers : {
        // updateProductInsideCart : (state, action) => {
        //     state.isProductInsideCart = action.payload
        // }
        updateProductInsideCart : (cartState, action) => {
            cartState.isProductInsideCart = action.payload
        },
        updateItemCount : (cartState, action) => {
            cartState.count += action.payload
        }
    }
})


//store, action, reducer
export const  {updateProductInsideCart, updateItemCount} = slice.actions
export default slice.reducer

