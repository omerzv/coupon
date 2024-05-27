import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import couponReducer from './couponSlice';
import clientsReducer from './clientSlice'

export const store = configureStore({
    reducer: {
      auth: authReducer,
      coupon: couponReducer,
      clients:clientsReducer
    },
  })