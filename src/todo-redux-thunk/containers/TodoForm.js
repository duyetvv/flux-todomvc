import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'

import { 
  postTodos, 
  updateFilter 
} from '../actions'

const mapStateToProps = ({ filters }) => ({
  filters
})

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (name, status) => dispatch(updateFilter(name, status)),
  addTodo: (name) => dispatch(postTodos(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)