// action creators
import { requestTodos,
          receiveTodos,
          receiveTodo,
// Todo type constants
          REQUEST_TODOS,
          RECEIVE_TODOS,
          CREATE_TODO,
          RECEIVE_TODO
        } from '../actions/todo_actions';
// import RootReducer from '../reducers/root_reducer';
import { fetchTodos, createTodo } from '../util/todo_api_util';
// import createLogger from 'redux-logger';

// middleware set up
// redux middleware receives dispatches before the store. It can
// decide to intercept dispatch, trigger another dispatch, or pass
// it along and do nothing

// const logger = createLogger();
// let store = createStore(RootReducer, applyMiddleware(logger));

export default ({ getState, dispatch }) => next => action => {
  const requestTodosSuccess = data => dispatch(receiveTodos(data));
  const createSuccess = data => dispatch(receiveTodo(data));
  const error = e => console.log(e);

  switch (action.type) {
    case REQUEST_TODOS:
      // console.log("Made it to todos middleware");
      fetchTodos(requestTodosSuccess, error);
      break;
      // console.log("here is where todos would be fetched");
      // console.log(fetchTodos);
    case CREATE_TODO:
      // hits api util 
      createTodo(action.todo, createSuccess, error)
      break;
    default:
      return next(action);
  }
};
