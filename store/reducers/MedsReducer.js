import { HYDRATE_MEDICATION } from '../actions/types'

const INITIAL_STATE = {
  name: '',
  lotNumber: '',
  expirationDate: ''
}

// boilerplate

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE_MEDICATION: {
      console.log(action.payload)
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}
