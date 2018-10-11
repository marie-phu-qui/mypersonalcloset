import request from 'superagent'

// Actions to show news data
export const requestDATA = () => {
  return {
    type: "REQUEST_DATA"
  }
}


export const showError = (errorMessage) => {
  return {
    type: "SHOW_ERROR",
    errorMessage: errorMessage
  }
}

export const receiveData = (data) => {
  return {
    type: "RECEIVE_DATA",
    data: data
  }
}

// Fetching from API
export function fetchMeteo() {
console.log('hello 0')
  return (dispatch) => {
    console.log('hello 1')
    dispatch(requestDATA())
    return request
      .get('/')
      .then(res => {
        return dispatch(receiveData(JSON.parse(res)))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
