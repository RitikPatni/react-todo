import { ListAllTodos } from '../actions';

const visibilityFilter = (state = ListAllTodos.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return action;
    default:
      return state;
  }
};

export default visibilityFilter;
