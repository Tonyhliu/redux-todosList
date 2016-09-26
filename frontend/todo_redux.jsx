import React from 'react';
import ReactDOM from 'react-dom';
// import {fetchTodos} from './util/todo_api_util';
import configureStore from './store/store';
import { allTodos } from './reducers/selector';
import { requestTodos, REQUEST_TODOS } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>It worked!</h1>, root);
});

window.store = configureStore();
// window.rt = requestTodos
window.allTodos = allTodos;
