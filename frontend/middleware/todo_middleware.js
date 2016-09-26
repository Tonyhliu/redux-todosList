import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/todo_actions';
import RootReducer from '../reducers/root_reducer';
import createLogger from 'redux-logger';

// middleware set up
// redux middleware receives dispatches before the store. It can
// decide to intercept dispatch, trigger another dispatch, or pass
// it along and do nothing

const logger = createLogger();

let store = createStore(RootReducer, applyMiddleware(logger));
