import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
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
    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
