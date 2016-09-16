import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';

// createStore takes one reducer, configureStore returns store
// main store
const configureStore = () => (
  createStore(RootReducer)
);

export default configureStore;
