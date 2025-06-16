import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, updateTodo } from "../features/todos/todoSlice";
import toast from "react-hot-toast";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(title);

  const handleClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
    toast.success("Todo Deleted Successfully!");
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleSave = () => {
    if (updatedValue.trim() === "") {
      toast.error("Title cannot be empty!");
      return;
    }

    dispatch(updateTodo({ id, title: updatedValue }));
    setIsUpdating(false);
    toast.success("Todo Updated Successfully!");
  };

  return (
    <li
      className={`p-4 rounded border mb-2 text-white ${
        completed ? "bg-green-500" : "bg-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-4 h-4 cursor-pointer"
            checked={completed}
            onChange={handleClick}
            readOnly
          />
          {isUpdating ? (
            <input
              type="text"
              value={updatedValue}
              onChange={(e) => setUpdatedValue(e.target.value)}
              className="text-white px-2 py-1 rounded border-2 border-white"
            />
          ) : (
            <span className={completed ? "line-through text-black" : ""}>
              {title}
            </span>
          )}
        </span>
        <div className="space-x-5">
          {isUpdating ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 hover:bg-yellow-700 text-black px-3 py-1 rounded"
            >
              Update
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-black px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
