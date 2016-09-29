// export const fetchTodos = (success, error) => {
//   $.ajax({
//     method: "GET",
//     url: "api/todos",
//     success,
//     error
//   });
// };

export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};

export const createTodo = (todo, success, error) => {
  // todo an object here => Object {todo: object}
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: todo,
    success,
    error
  });
};

// data: { todo } ??
export const updateTodo = (todo, success, error) => {
  // debugger
  // todo here => Object {id: 1, title: "...", etc}
  // put into object for controller params
  $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: { todo },
    success,
    error
  });
};

export const destroyTodo = (todo, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`,
    success,
    error
  });
};
