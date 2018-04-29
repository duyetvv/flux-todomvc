import { UPDATE_FILTER } from '../constants'

const filters = ['active', 'inactive']

const updateFilter = (filters, action) => (
  action.status
    ? [...new Set([...filters].concat(action.name))]
    : [...filters].filter(ele => ele !== action.name)
)

export default (state = filters, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return updateFilter(state, action)
    default:
      return state
  }
}
