import {
    HYDRATE_MEDICATION
} from './types'

export const getLotNumber = (lotNumber) => {
    const medication = {};
    return (dispatch) => {
     //   console.log("Kevin: TEST THIS IS THE Action LOTNUMBER PASSED: " + lotNumber);
        medication.lotNumber = lotNumber;

    dispatch({
        type : HYDRATE_MEDICATION,
        payload : medication
    })
    }
}