import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../features/todos/api/baseApi";

export const store = configureStore({
  reducer: {
    // userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
