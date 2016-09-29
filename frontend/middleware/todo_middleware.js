// action creators
import { requestTodos,
          receiveTodos,
          receiveTodo,
          removeTodo,

// Todo type constants
          REQUEST_TODOS,
          CREATE_TODO,
          DESTROY_TODO,
          UPDATE_TODO
        } from '../actions/todo_actions';

// Todo API Util
import { fetchTodos,
          createTodo,
          updateTodo,
          destroyTodo
        } from '../util/todo_api_util';

// middleware set up
// redux middleware receives dispatches before the store. It can
// decide to intercept dispatch, trigger another dispatch, or pass
// it along and do nothing

export default ({ getState, dispatch }) => next => action => {
  const todosSuccess = data => dispatch(receiveTodos(data));
  const todoSuccess = data => dispatch(receiveTodo(data));
  const todoRemoved = data => dispatch(removeTodo(data));
  const error = e => console.log(e);

  switch (action.type) {
    case REQUEST_TODOS:
      // makes API calls, then on success, dispatches another action
      fetchTodos(todosSuccess, error);
      break;
    case CREATE_TODO:
      // hits api util
      createTodo(action.todo, todoSuccess, error)
      break;
    case UPDATE_TODO:
      // hits api util
      updateTodo(action.todo, todoSuccess, error)
      break;
    case DESTROY_TODO:
      // hits api util
      destroyTodo(action.todo, todoRemoved, error)
      break;
    default:
      return next(action);
  }
};
