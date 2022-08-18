import React from 'react';
import TodoList from './components/TodoList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <UsersList />
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;
