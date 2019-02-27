import { HYDRATE_MEDICATION, CLEAR_MEDICATION, CLEAR_DATAFIELD } from '../actions/types'

const INITIAL_STATE = {
  ndc: '',
  medID : null,// or 0  ?
  name: null,
  lotNumber: null,
  expirationDate: null,
  
}

// boilerplate

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE_MEDICATION: {
      return { ...state, ...action.payload }
    }
    case CLEAR_MEDICATION: {
      return  INITIAL_STATE ;
    }
    case CLEAR_DATAFIELD: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}
