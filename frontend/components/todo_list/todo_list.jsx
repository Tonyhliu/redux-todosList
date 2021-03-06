import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    const { requestTodos } = this.props
    // debugger
    // console.log("did mount");
    requestTodos(); // passed as props from container
  }

  render() {
    const { todos, createTodo, toggleTodo, destroyTodo } = this.props;
    // debugger
    return(
      <div>
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoListItem
              key={`todo-list-item${todo.id}`}
              todo={todo}
              toggleTodo={toggleTodo}
              destroyTodo={destroyTodo} />
          ))}
        </ul>
        <TodoForm createTodo={createTodo}/>
      </div>
    );
  }
};

export default TodoList;
