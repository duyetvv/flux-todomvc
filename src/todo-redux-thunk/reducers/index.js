import { combineReducers } from 'redux'
import todos from './todoReducer'
import filters from './filterReducer'

const rootReducer = combineReducers({
  todos,
  filters
})

export default rootReducer
