import { connect } from 'react-redux';
import { toggleTodo, deleteTodo} from './actions';    
import TodoList from './todo-list';
import { VisibilityFilters } from './actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};
//pushes list of todo down
 const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
    //todos: state.todos  //(when we return all)
 });

const mapDispatchToProps = dispatch => ({
  onToggleTodo: id => dispatch(toggleTodo(id)),
  onDeleteTodo: id =>dispatch(deleteTodo(id))
});  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);