// getter methods for the application state

export const allTodos = (state) => {
  return state ? Object.keys(state.todos).map(id => state.todos[id]) : [];
};
