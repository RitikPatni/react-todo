import { combineReducers } from 'redux';
import todo from './todo';
import visibilityFilter from './showAll';

export default combineReducers({
  todo,
  visibilityFilter,
});
