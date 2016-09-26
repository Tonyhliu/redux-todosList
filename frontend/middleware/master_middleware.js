import { applyMiddleware } from 'redux';
import TodoMiddleware from './todo_middleware';

const masterMiddleware = applyMiddleware(
  TodoMiddleware
);

export default masterMiddleware;
