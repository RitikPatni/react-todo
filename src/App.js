import React from 'react';
import AddTodo from './components/addTodo';
import VisibleTodoList from './components/visibleTodoList';
const App = () => (
  <div className="flex items-center mt-16 flex-col">
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
