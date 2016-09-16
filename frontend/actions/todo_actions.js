// actions - POJOS
// produce objects to be send through Middleware & to the store by invoking store#dispatch

export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";


export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});
