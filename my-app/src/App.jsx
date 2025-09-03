import React from 'react';
import TodoList from './components/TodoList';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>My React App</h1>
      <MyProfile />
      <hr style={{ margin: "40px 0" }} />
      <TodoList />
    </div>
  );
}

export default App;