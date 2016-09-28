import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    // debugger
    // console.log("did mount");
    this.props.requestTodos(); // passed as props from container
  }

  render() {
    const { todos } = this.props;
    // debugger
    return(
      <div>
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoListItem
              key={`todo-list-item${todo.id}`}
              todo={todo} />
          ))}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
};

export default TodoList;
