import {combineReducers} from 'redux';
import TodosReducer from './todos_reducer';

// combineReducer takes object, combines all the reducers
const RootReducer = combineReducers({todos: TodosReducer});

export default RootReducer;
