import {
    HYDRATE_PATIENT
} from './types'
import { dummy_Patient_Data } from '../../research/FakePatientData';

//Will be imporing a patientId, which is a bar code number called 'data'
export const hydratePatientData = (data) => { 
    const patientData = {};
    
    
    return (dispatch) => {
        const selectedPatient = dummy_Patient_Data.find(patientData => patientData.patient_Id == data)
        //console.log("Kevin dummy: data " + data + "  jsonID " + selectedPatient.patient_Id); 
        if (selectedPatient !== undefined) {
            patientData.id = selectedPatient.patient_Id
            patientData.firstName = selectedPatient.name.first
            patientData.lastName = selectedPatient.name.last
            patientData.email = selectedPatient.email
            patientData.phone = selectedPatient.phone
            patientData.address = selectedPatient.address
            patientData.birthMonth = selectedPatient.birth_Date.month
            patientData.birthDay = selectedPatient.birth_Date.day
            patientData.birthYear = selectedPatient.birth_Date.year
           patientData.index = selectedPatient.index
        }
        else {
            patientData.id = undefined;
        }    
        


        dispatch({
            type: HYDRATE_PATIENT,
            payload: patientData
        })
    }
}