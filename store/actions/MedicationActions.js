import axios from 'axios'
import {
    HYDRATE_MEDICATION
} from './types'

export const getMedication = (ndcNumbers) => { // expects an array as argument
    const ndcDbUrl = 'https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc='
    const medication = {}

    return (dispatch) => {
        if(ndcNumbers == undefined){
            medication.name = null;
            medication.ndc = '';
            dispatch({
                type: HYDRATE_MEDICATION,
                payload: medication
            })
        }
        else {
            ndcNumbers.some((ndcNum) => { // iterate through all ndcNumber variations
                                            // and break when you get a medication name from one of
                                            // the variations (Array#some)
                axios.get(ndcDbUrl + ndcNum)
                .then(response => {
                    if (response.data.ndcStatus.status == "ACTIVE") {   
                        console.log(response)
                        medication.name = response.data.ndcStatus.conceptName
                        medication.ndc = ndcNum
                        console.log(medication)
                        dispatch({
                            type: HYDRATE_MEDICATION,
                            payload: medication
                        })
                    }               
                })
            })
        }//end else
        
    }
}