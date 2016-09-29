// getter methods for the application state
// used in mapStateToProps
export const allTodos = (state) => {
  return state ? Object.keys(state.todos).map(id => state.todos[id]) : [];
};

// state = {
//     todos: {
//         1: {
//             id: 1,
//             body: 'learn selectors',
//             done: false
//         },
//         2: {
//             id: 2,
//             body: 'look good doing it',
//             done: true
//         }
//     },
//     filter: 'undone'
// }
