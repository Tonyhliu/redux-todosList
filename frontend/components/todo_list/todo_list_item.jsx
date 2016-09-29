import React from 'react';
// import { requestTodos } from '../../actions/todo_actions';
// import TodoListItem from './todo_list_item';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleDetail = this.toggleDetail.bind(this);
  }

  // toggleDetail(e) {
  //   e.preventDefault();
  //   this.setState({})
  // }

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
          <button onClick={destroyTodo(todo)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
