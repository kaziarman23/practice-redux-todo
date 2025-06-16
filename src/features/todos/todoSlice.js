import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Todo One", completed: false },
  { id: 2, title: "Todo Two", completed: false },
  { id: 3, title: "Todo Three", completed: true },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const newTodo = {
        id: Date.now(),
        title: payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, { payload }) => {
      const todo = state.find((t) => t.id === payload.id);
      if (todo) {
        todo.completed = payload.completed;
      }
    },
    updateTodo: (state, {payload}) => {
      const { id, title } = payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { addTodo, toggleComplete, updateTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
