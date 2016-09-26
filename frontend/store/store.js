import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

// createStore takes one reducer, configureStore returns store
// main store
export default () => (
  createStore(
              RootReducer,
              masterMiddleware
  )
);

// export default configureStore;
