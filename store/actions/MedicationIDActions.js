import { HYDRATE_MEDICATION } from './types'

export const getMedicationID = (medicationIDValue) => {
    const medication = {};
    console.log("kevin id: ~~~~~~~~ medicationIDValue: " + medicationIDValue);
    return (dispatch) => {        
        medication.medID = medicationIDValue;
        console.log("kevin id: ~~~~~~~~ medication.medID: " + medication.medID);

        dispatch({
            type: HYDRATE_MEDICATION,
            payload: medication
        })
    }

}