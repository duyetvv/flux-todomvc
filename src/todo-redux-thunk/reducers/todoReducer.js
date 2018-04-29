import {
  GET_TODOS_SUCCESS,
  POST_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS
} from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
    case POST_TODOS_SUCCESS:
    case UPDATE_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
      return action.todos
    default:
      return state
  }
}
