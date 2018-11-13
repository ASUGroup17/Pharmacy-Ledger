import { combineReducers } from 'redux'
import MedsReducer from './MedsReducer'
import PatientReducer from './PatientReducer'

export default combineReducers({
    medication: MedsReducer,
    patient: PatientReducer
})