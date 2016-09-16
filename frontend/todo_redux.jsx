import React from 'react';
import ReactDOM from 'react-dom';
// import {fetchTodos} from './util/todo_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>It worked!</h1>, root);
});

window.store = configureStore();
