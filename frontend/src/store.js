import { configureStore } from "@reduxjs/toolkit";
import { productById } from "./reducers/productByIdReducer";
import { productReducer } from "./reducers/productReducer";

export default configureStore({
    reducer:{
        product:productReducer,
        productById:productById
    }
})