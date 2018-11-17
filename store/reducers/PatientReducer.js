import { HYDRATE_PATIENT } from '../actions/types'

const INITIAL_STATE = {
    id: '',
    name: '',
    dateOfBirth: '',
    expirationDate: ''
    // other patient data
}

// boilerplate

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HYDRATE_PATIENT: {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}