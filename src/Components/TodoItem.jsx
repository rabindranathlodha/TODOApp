import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 shadow-lg transition-transform duration-300 ${
        todo.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-white dark:bg-gray-800'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer mr-3"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-grow border-none bg-transparent rounded-lg ${
          isTodoEditable ? 'border-gray-300 dark:border-gray-700 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through text-gray-500 dark:text-gray-300' : 'text-gray-900 dark:text-white'} focus:outline-none`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <div className="flex gap-2">
        <button
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? '💾' : '✏️'}
        </button>
        <button
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
