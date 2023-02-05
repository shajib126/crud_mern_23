import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const productById = createReducer(initialState,{
    ReadProductByIdRequest:(state)=>{
        state.loading = true

    },
    ReadProductByIdSuccess:(state,action)=>{
        state.loading = false
        state.singleProduct = action.payload
    },
    ReadProductByIdFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
})