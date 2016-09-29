import { connect } from 'react-redux';
import TodoList from './todo_list'; // presentational component;
import { allTodos } from '../../reducers/selector';
import { requestTodos, createTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
}); // passes this down as props

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: todo => dispatch(createTodo(todo))
}); // gives these functions as props to presentational layer

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
