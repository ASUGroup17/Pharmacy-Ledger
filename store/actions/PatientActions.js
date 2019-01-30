import {
    HYDRATE_PATIENT
} from './types'
import { dummy_Patient_Data } from '../../research/FakePatientData';

//Will be imporing a patientId, which is a bar code number called 'data'
export const hydratePatientData = (data) => { 
    const patientData = {};
    
    
    return (dispatch) => {

        for (let i = 0; i < dummy_Patient_Data.length; i++){
            console.log("Kevin dummy: data " + data + "  jsonID " + dummy_Patient_Data[i].patient_Id); 
            if (dummy_Patient_Data[i].patient_Id == data) {
                patientData.id = dummy_Patient_Data[i].patient_Id;
                patientData.firstName = dummy_Patient_Data[i].name.first;
                patientData.lastName = dummy_Patient_Data[i].name.last;
                patientData.email = dummy_Patient_Data[i].email;
                patientData.phone = dummy_Patient_Data[i].phone;
                patientData.address = dummy_Patient_Data[i].address;
                patientData.birthMonth = dummy_Patient_Data[i].birth_Date.month;
                patientData.birthDay = dummy_Patient_Data[i].birth_Date.day;
                patientData.birthYear = dummy_Patient_Data[i].birth_Date.year;
                patientData.index = dummy_Patient_Data[i].index;
            break;
            }
            //console.log("Kevin dummy: " + dummy_Patient_Data[i].index);
        }


        dispatch({
            type: HYDRATE_PATIENT,
            payload: patientData
        })
    }
}