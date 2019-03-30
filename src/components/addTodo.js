import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  let dateInput;
  return (
    <div>
      <h1 className="text-2xl text-center">Make your Todo</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value, dateInput.value));
          input.value = '';
          dateInput.value = '';
        }}
        className="mt-16"
      >
        <input
          ref={node => (input = node)}
          className="py-2 border-b focus:border-gray-600 border-gray-400 w-2/3 bg-grey-100"
          required
        />
        <input
          ref={node => (dateInput = node)}
          className="py-2 bg-grey-100"
          type="date"
          required
        />
        <button
          type="submit"
          className="py-2 px-6 border border-blue-500 border-2 text-blue-500 font-bold ml-4 rounded shadow"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
