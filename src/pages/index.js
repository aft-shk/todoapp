import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: todoText.trim(),
      };
      setTodos([...todos, newTodo]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          color='#00008B'
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button type="submit" color='#00008B'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
