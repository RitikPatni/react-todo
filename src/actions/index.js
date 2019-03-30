let nextTodoId = 0;
export const addTodo = (text, date) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  date,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id,
});
export const ListAllTodos = {
  SHOW_ALL: 'SHOW_ALL',
};
