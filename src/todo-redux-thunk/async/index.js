import http from 'axios'

export const getTodosData = () => http.get('http://localhost/todos')

export const postTodosData = (name) => http.post('http://localhost/todos', {name})

export const updateTodoData = (todo) => http.post(`http://localhost/todos/${todo.id}`, todo)

export const deleteTodoData = (todo) => http.delete(`http://localhost/todos/${todo.id}`)