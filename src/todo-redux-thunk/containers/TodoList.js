import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { 
  getTodos, 
  deleteTodo, 
  updateTodo 
} from '../actions'

const mapStateToProps = ({ todos, filters }) => ({
  todos,
  filters
})

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos()),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
