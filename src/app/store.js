import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/products";
import cartReducer from "../features/cart/cart"

const store = configureStore({
    reducer : {
        prdct : productReducer,
        cart : cartReducer
    }
})
export default store