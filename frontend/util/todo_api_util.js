// export const fetchTodos = (success, error) => {
//   $.ajax({
//     method: "GET",
//     url: "api/todos",
//     success,
//     error
//   });
// };

export const fetchTodos = function(success, error){
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};
