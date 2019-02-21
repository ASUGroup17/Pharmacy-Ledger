import {
    HYDRATE_MEDICATION, CLEAR_MEDICATION, CLEAR_LOTNUMBER, CLEAR_DATAFIELD
} from './types'

export const getLotNumber = (lotNumber) => {
    const medication = {};
    return (dispatch) => {
        
        if (lotNumber == 1) {
            dispatch({
                type: CLEAR_MEDICATION, 
                payload: medication
            })
        } else if(lotNumber == undefined){
            medication.lotNumber = null;
        } else {
            medication.lotNumber = lotNumber;
        }    
            
            dispatch({
                type : HYDRATE_MEDICATION,
                payload : medication
            })
        
    }
}