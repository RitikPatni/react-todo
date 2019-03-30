import React from 'react';
import AddTodo from './components/addTodo';
import VisibleTodoList from './components/visibleTodoList';
const App = () => (
  <div className="flex  mt-16 flex-col px-64 w-full">
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
