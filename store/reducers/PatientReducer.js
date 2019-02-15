import { HYDRATE_PATIENT } from '../actions/types'

const INITIAL_STATE = {
    id: null,
    firstName: '',
    lastName : '',
    email : '',
    phone : '',
    address : '',
    birthMonth : null,
    birthDay : null,
    birthYear : null,
    index : null
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
