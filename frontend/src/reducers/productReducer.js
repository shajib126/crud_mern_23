import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const productReducer = createReducer(initialState,{
    ReadProductRequest:(state)=>{
        state.loading = true

    },
    ReadProductSuccess:(state,action)=>{
        state.loading = false
        state.products = action.payload
    },
    ReadProductFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    
    CreateProductRequest:(state)=>{
        state.loading = true
    },
    CreateProductSuccess:(state,action)=>{
        state.loading = false
        state.product = action.payload
    },
    CreateProductFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload
    },
    UpdateProductRequest:(state)=>{
        state.loading = true;
    
    },
    UpdateProductSuccess:(state,action)=>{
        state.loading = false;
        state.product = action.payload
    },
    UpdateProductFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload
    },
    DeleteProductRequest:(state)=>{
        state.loading = true
    },
    DeleteProductSuccess:(state,action)=>{
        state.loading = false;
        state.product = action.payload
    },
    DeleteProductFailure:(state,action)=>{
        state.loading = false
        state.error = action.error
    }
})