import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <React.Fragment>
    <h1 className="text-xl font-semibold mt-8">Due Tasks</h1>
    <ul>
      {todos.map(
        todo =>
          !todo.completed && (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => toggleTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
            />
          )
      )}
    </ul>
    {todos.filter(todo => todo.completed === false).length === 0 && (
      <p>No Due Tasks</p>
    )}
    <h1 className="text-xl font-semibold mt-6">Completed Tasks</h1>
    <ul>
      {todos.map(
        todo =>
          todo.completed && (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => toggleTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
            />
          )
      )}
    </ul>
    {todos.filter(todo => !todo.completed === false).length === 0 && (
      <p>No Completed Tasks</p>
    )}
  </React.Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
