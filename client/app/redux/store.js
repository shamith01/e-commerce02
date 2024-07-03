import {setupListeners} from  "@reduxjs/toolkit/query";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";


export const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

setupListeners(store.dispatch);

export default store;