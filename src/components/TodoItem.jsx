import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todos/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
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
          <span className={completed ? "line-through text-black" : ""}>
            {title}
          </span>
        </span>
        <div className="space-x-5">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-black px-3 py-1 rounded cursor-pointer">
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 
          text-black px-3 py-1 rounded cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
