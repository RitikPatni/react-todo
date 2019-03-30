import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, removeTodo, completed, text, dueDate }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
    className="flex items-center"
  >
    {text} to be completed on or before {dueDate}
    <button
      onClick={onClick}
      className="ml-6"
      aria-label={completed ? 'Mark Incomplete' : 'Mark Incomplete'}
    >
      {completed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="arcs"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="butt"
          strokeLinejoin="arcs"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
    <button className="ml-3" onClick={removeTodo} aria-label="Remove Task">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="butt"
        strokeLinejoin="arcs"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    </button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
};

export default Todo;
