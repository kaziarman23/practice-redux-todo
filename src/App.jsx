import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center p-5">
      <div className="w-4/5 h-4/5 p-5 space-y-5 border border-white rounded-xl">
        <h1 className="font-bold text-center text-2xl">Add You New Todo</h1>
        <TodoForm />
        <TodoLists />
      </div>
    </div>
  );
}

export default App;
