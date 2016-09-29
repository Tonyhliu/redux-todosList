import React from 'react';
// import { requestTodos } from '../../actions/todo_actions';
// import TodoListItem from './todo_list_item';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleDetail = this.toggleDetail.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(e) {
    const { todo, destroyTodo } = this.props;
    e.preventDefault();
    // debugger
    // Object {id: 21, title: "asd", body: "asd", done: false, created_at: "2016-09-29T19:11:31.007Z"…}
    destroyTodo(todo)
  }


  render() {
    const { todo, toggleTodo, destroyTodo } = this.props;
    // const { title } = todo;
    // debugger
    return(
      <li className="todo-list-item">
        <div className="todo-header">
          <h2>{todo.title}</h2>
          <button className={todo.done ? "done" : "undone"}
                  onClick={toggleTodo(todo)}>
                  {todo.done ? "Undo" : "Done"}
          </button>
          <button onClick={this.deleteTodo}>Delete</button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
