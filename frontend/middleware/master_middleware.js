import { applyMiddleware } from 'redux';
import TodoMiddleware from './todo_middleware';

export default const masterMiddleware = applyMiddleware(
  TodoMiddleware
);

// export default masterMiddleware;
