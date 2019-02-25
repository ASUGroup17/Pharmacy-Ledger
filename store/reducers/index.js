import { combineReducers } from 'redux'
import MedsReducer from './MedsReducer'
import PatientReducer from './PatientReducer'
import medicationArrayReducer from './MedicationArrayReducer';

export default combineReducers({
  medication: MedsReducer,
  patient: PatientReducer,
  medicationsArray : medicationArrayReducer
})
