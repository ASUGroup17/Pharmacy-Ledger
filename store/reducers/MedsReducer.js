const INITIAL_STATE = {
    name: '',
    lotNumber: '',
    expirationDate: ''
}

// boilerplate

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SOME_CASE': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}