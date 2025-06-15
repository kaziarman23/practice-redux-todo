import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../features/todos/api/baseApi";
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
