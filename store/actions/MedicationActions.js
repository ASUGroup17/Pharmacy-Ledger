import axios from 'axios'
import {
    HYDRATE_MEDICATION
} from './types'


export const getMedication = (ndcNumbers) => { // expects an array as argument
    const ndcDbUrl = 'https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc='
    const medication = { medicationName: '' }
    ndcNumbers.some((ndcNum) => { // iterate through all ndcNumber variations
                                    // and break when you get a medication name from one of
                                    // the variations (Array#some)
        axios.get(ndcDbUrl + ndcNum)
        .then(response => {
            if (response.data.ndcStatus.status == "ACTIVE") {
                medication.medicationName = response.data.ndcStatus.conceptName
                console.log('MEDDSS', medication.medicationName)
                return medicationName
            }
        })
    })
    return (dispatch) => {
        dispatch({
            type: HYDRATE_MEDICATION,
            payload: medication
        })
    }
}