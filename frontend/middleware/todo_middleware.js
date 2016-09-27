import { requestTodos, receiveTodos, REQUEST_TODOS, RECEIVE_TODOS } from '../actions/todo_actions';
import RootReducer from '../reducers/root_reducer';
import { fetchTodos } from '../util/todo_api_util';
// import createLogger from 'redux-logger';

// middleware set up
// redux middleware receives dispatches before the store. It can
// decide to intercept dispatch, trigger another dispatch, or pass
// it along and do nothing

// const logger = createLogger();
// let store = createStore(RootReducer, applyMiddleware(logger));

export default ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      // console.log("Made it to todos middleware");
      const success = (data) => dispatch(receiveTodos(data));
      const error = (e) => console.log(e);
      fetchTodos(success, error);
      break;
      // console.log("here is where todos would be fetched");
      // console.log(fetchTodos);
    default:
      return next(action);
  }
};
