import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

// const defaultState = {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };

const TodosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      // console.log("made it to reducer");
      let newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      const newTodo = {[action.tood.id]: action.todo}
      return Object.assign({}, state, newTodo); // combines all 3 
    default:
      return state;
  }
};

export default TodosReducer;
