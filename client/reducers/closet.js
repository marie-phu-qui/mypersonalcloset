function reducer(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_CLOSET':
            return action.closet
        default:
            return state
    }
}

export default reducer