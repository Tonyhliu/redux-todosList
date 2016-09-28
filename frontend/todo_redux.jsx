import React from 'react';
import ReactDOM from 'react-dom';
// import {fetchTodos} from './util/todo_api_util';
import configureStore from './store/store';
import { allTodos } from './reducers/selector';
import { requestTodos, REQUEST_TODOS, createTodo } from './actions/todo_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});

// window.rt = requestTodos
// window.store = configureStore();
// window.allTodos = allTodos;
// window.ct = createTodo;
