import { connect } from 'react-redux';
import { toggleTodo, ListAllTodos } from '../actions';
import TodoList from './todoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case ListAllTodos.SHOW_ALL:
      return todos;
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todo, state.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
