import { SOME_CASE } from '../actions/types'

const INITIAL_STATE = {
    name: '',
    dateOfBirth: '',
    expirationDate: ''
    // other patient data
}

// boilerplate

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SOME_CASE: {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}