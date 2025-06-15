function TodoForm() {
  return (
    <div className="w-4/5 h-20 mx-auto">
      <div className="flex justify-evenly items-center gap-5 border border-white rounded-2xl p-2">
        <input type="text" className='w-4/5 p-2 outline-none'/>
        <button type="submit" className='text-base bg-white text-black p-2 rounded-xl font-bold cursor-pointer hover:bg-green-600'>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoForm;
