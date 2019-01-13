import { HYDRATE_PATIENT } from '../actions/types'

const INITIAL_STATE = {
    //Adding some dummy data to ensure I'm getting information from this Reducer
    //THis should not be the inital state, all variables should just be ''
    id: '',
    firstName: 'TestFirst',
    lastName: 'TestLast',
    dateOfBirth: 'Test:1-1-2019'
    // expirationDate: ''
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
