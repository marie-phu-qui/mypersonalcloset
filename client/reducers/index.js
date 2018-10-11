import { combineReducers } from 'redux'

const LOADING = false
function loading(state = LOADING, action) {
  switch (action.type) {
    case "REQUEST_DATA":
      return true
    case "RECEIVE_METEO":
      return false
    case "SHOW_ERROR":
      return false
    default:
      return state
  }
}

export default combineReducers({
    loading
})