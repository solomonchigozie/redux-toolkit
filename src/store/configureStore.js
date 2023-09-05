import { configureStore } from "@reduxjs/toolkit";
import reducer from './cart'


const store = configureStore({
    reducer
});

export default store