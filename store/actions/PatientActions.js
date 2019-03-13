import {
    HYDRATE_PATIENT
} from './types'
import { dummy_Patient_Data } from '../../research/FakePatientData';

//Will be imporing a patientId, which is a bar code number called 'data'
export const hydratePatientData = (data) => { 
    const patientData = {};
    
    
    return (dispatch) => {
        const selectedPatient = dummy_Patient_Data.find(patientData => patientData.patient_Id == data)
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
            //patientData.id = undefined;
            patientData.id = dummy_Patient_Data[1].patient_Id
            patientData.firstName = dummy_Patient_Data[1].name.first
            patientData.lastName = dummy_Patient_Data[1].name.last
            patientData.email = dummy_Patient_Data[1].email
            patientData.phone = dummy_Patient_Data[1].phone
            patientData.address = dummy_Patient_Data[1].address
            patientData.birthMonth = dummy_Patient_Data[1].birth_Date.month
            patientData.birthDay = dummy_Patient_Data[1].birth_Date.day
            patientData.birthYear = dummy_Patient_Data[1].birth_Date.year
           patientData.index = dummy_Patient_Data[1].index
        }    
        


        dispatch({
            type: HYDRATE_PATIENT,
            payload: patientData
        })
    }
}