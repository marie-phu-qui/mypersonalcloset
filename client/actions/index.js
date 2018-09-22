import request from 'superagent'

export function receiveCloset(closet) {
    return {
        type: 'RECEIVE_CLOSET',
        closet: closet
    }
}

export function fetchCloset() {
    return (dispatch) => {
        request.get('/api/v1/closet')
            .then((res) => {
                return res.body
            }).then(colours => {
                dispatch(receiveCloset(closet))
            })
    }
}