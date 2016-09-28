import React from 'react';
// import { requestTodos } from '../../actions/todo_actions';
// import TodoListItem from './todo_list_item';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { todo } = this.props;
    // const { title } = todo;

    return(
      <li className="todo-list-item">
        <div className="todo-header">
          <h2>{this.props.todo.title}</h2>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
