import {
  UPDATE_FILTER,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODOS_SUCCESS,
  POST_TODOS_FAILURE,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from '../constants'

import {
  getTodosData,
  postTodosData,
  updateTodoData,
  deleteTodoData
} from '../async'

// ____________________________________________________________________________
//                                                                    GET_TODOS
export const getTodosSuccess = (todos) =>({ type: GET_TODOS_SUCCESS, todos })

export const getTodosFailure = () => ({ type: GET_TODOS_FAILURE })

export const getTodos = () => ( dispatch => {
  getTodosData()
    .then(res => { dispatch(getTodosSuccess(res.data)) })
    .catch(error => { dispatch(getTodosFailure()) })
})

// ____________________________________________________________________________
//                                                                   POST_TODOS
export const postTodosSuccess = (todos) => ({ type: POST_TODOS_SUCCESS, todos })

export const postTodosFailure = () => ({ type: POST_TODOS_FAILURE })

export const postTodos = (name) => ( dispatch => {
  postTodosData(name)
    .then(res => { dispatch(postTodosSuccess(res.data.todos)) })
    .catch(error => { dispatch(postTodosFailure()) })
})

// ____________________________________________________________________________
//                                                                  UPDATE_TODO
export const updateTodoSuccess = (todos) => ({ type: UPDATE_TODO_SUCCESS, todos })

export const updateTodoFailure = () => ({ type: UPDATE_TODO_FAILURE })

export const updateTodo = (todo) => ( dispatch => {
  updateTodoData(todo)
    .then(res => { dispatch(updateTodoSuccess(res.data.todos)) })
    .catch(error => { dispatch(updateTodoFailure()) })
})

// ____________________________________________________________________________
//                                                                  DELETE_TODO
export const deleteTodoSuccess = (todos) => ({ type: DELETE_TODO_SUCCESS, todos })

export const deleteTodoFailure = () => ({ type: DELETE_TODO_FAILURE })

export const deleteTodo = (todo) => ( dispatch => {
  deleteTodoData(todo)
    .then(res => { dispatch(deleteTodoSuccess(res.data.todos)) })
    .catch(error => { dispatch(deleteTodoFailure()) })
})

// ____________________________________________________________________________
//                                                                UPDATE_FILTER
export const updateFilter = (name, status) => ({ type: UPDATE_FILTER, name, status})