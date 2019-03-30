import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul className="mt-4">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
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
