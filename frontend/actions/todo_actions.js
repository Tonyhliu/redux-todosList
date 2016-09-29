// actions - POJOS
// produce objects to be send through Middleware & to the store by invoking store#dispatch

// Export for middleware:
export const REQUEST_TODOS = "REQUEST_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const DESTROY_TODO = "DESTROY_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// Export for reducer:
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


// Middleware
export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  todo
});

export const destroyTodo = todo => ({
  type: DESTROY_TODO,
  todo
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  todo
});

// reducer

export const receiveTodos = todos => ({
  // console.log("made it to todo actions");
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});


export const toggleTodo = todo => ({
  type: TOGGLE_TODO,
  todo
});


export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});
