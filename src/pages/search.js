import { useState } from 'react';

export default function Search() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Fetch todos that match the search term from the server
    // Replace the following code with your own logic for fetching todos
    // For example, you can use an API call or fetch from a database
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredTodos);
  };

  return (
    <div>
      <h1>Search Todos</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
