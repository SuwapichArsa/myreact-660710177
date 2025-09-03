import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Assignment JSX', done: true },
    { id: 2, text: 'Assignment ROS2', done: false },
    { id: 3, text: 'Assignment AI', done: true },
    { id: 4, text: 'Summary DBA', done: true },
    { id: 5, text: 'Summary SA', done: true },
    { id: 6, text: 'Summary BIS', done: false },
    { id: 7, text: 'Summary ROS2', done: false },
    { id: 8, text: 'Summary AI', done: false },
    { id: 9, text: 'Summary BEFE', done: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Computed values
  const activeTodos = todos.filter(todo => !todo.done);
  const completedTodos = todos.filter(todo => todo.done);
  
  const filteredTodos = (() => {
    switch(filter) {
      case 'active': return activeTodos;
      case 'completed': return completedTodos;
      default: return todos;
    }
  })();

  const stats = {
    total: todos.length,
    active: activeTodos.length,
    completed: completedTodos.length,
    percentComplete: todos.length > 0 
      ? Math.round((completedTodos.length / todos.length) * 100) 
      : 0
  };

  // Event handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Early return for empty state
  if (todos.length === 0 && filter !== 'all') {
    return (
      <div className="empty-state" style={{ textAlign: 'center', padding: '20px' }}>
        <p>No {filter} todos</p>
        <button onClick={() => setFilter('all')}>
          Show all todos
        </button>
      </div>
    );
  }

  return (
    <div className="todo-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* Header with stats */}
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1>📝 My Todo List</h1>
        
        {todos.length > 0 && (
          <div className="stats" style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '20px', 
            marginTop: '10px',
            color: '#666'
          }}>
            <span>Total: {stats.total}</span>
            <span>Active: {stats.active}</span>
            <span>Completed: {stats.completed}</span>
            <span>Progress: {stats.percentComplete}%</span>
          </div>
        )}
      </header>

      {/* Add todo form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add todolist ..."
            style={{ 
              flex: 1, 
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd'
            }}
          />
          
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            style={{
              padding: '10px 20px',
              backgroundColor: inputValue.trim() ? '#4caf50' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: inputValue.trim() ? 'pointer' : 'not-allowed'
            }}
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* Filter buttons */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            style={{
              marginRight: '10px',
              padding: '5px 15px',
              backgroundColor: filter === filterType ? '#4caf50' : '#f0f0f0',
              color: filter === filterType ? 'white' : '#333',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {filterType}
            {filterType === 'active' && ` (${stats.active})`}
            {filterType === 'completed' && ` (${stats.completed})`}
          </button>
        ))}
      </div>

      {/* Todo list */}
      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999' }}>
          No todos to display
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredTodos.map(todo => (
            <li 
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                marginBottom: '10px',
                backgroundColor: todo.done ? '#f9f9f9' : 'white',
                border: '1px solid #eee',
                borderRadius: '5px'
              }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: '10px' }}
              />
              
              <span 
                style={{
                  flex: 1,
                  textDecoration: todo.done ? 'line-through' : 'none',
                  color: todo.done ? '#999' : '#333'
                }}
              >
                {todo.text}
              </span>
              
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Progress bar */}
      {todos.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <div style={{
            height: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${stats.percentComplete}%`,
              backgroundColor: '#4caf50',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px', color: '#666' }}>
            {stats.percentComplete}% Complete
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoList;
