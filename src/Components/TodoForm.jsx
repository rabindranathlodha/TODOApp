import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex shadow-md rounded-lg overflow-hidden bg-gray-100">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border-none rounded-l-lg px-4 py-2 bg-white text-gray-800 placeholder-gray-500 outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white font-medium transition-colors duration-300">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
