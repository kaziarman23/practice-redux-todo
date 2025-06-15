import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import toast from "react-hot-toast";

function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addTodo({
        title: value,
      })
    );

    toast.success("New Todo Added.");
    
    setValue("");
  };

  return (
    <div className="w-4/5 h-20 mx-auto">
      <form
        onSubmit={onSubmit}
        className="flex justify-evenly items-center gap-5 border border-white rounded-2xl p-2"
      >
        <input
          type="text"
          className="w-4/5 p-2 outline-none"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="submit"
          className="text-base bg-white text-black p-2 rounded-xl font-bold cursor-pointer hover:bg-green-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
