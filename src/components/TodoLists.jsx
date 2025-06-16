import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
// import { useGetTodosQuery } from '../features/todos/api/todosApi';

function TodoLists() {
  const todos = useSelector((state) => state.todos);

  // const { data: todos = [], isLoading, isError } = useGetTodosQuery();

  // if (isLoading) {
  //   return <p className="text-white">Loading todos...</p>;
  // }

  // if (isError) {
  //   return <p className="text-red-500">Failed to load todos.</p>;
  // }

  return (
    <ul className="list-group">
      {todos?.map((todo, index) => (
        <TodoItem
          key={index}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
