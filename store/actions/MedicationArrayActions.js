import { HYDRATE_MED_ARRAY } from './types';

// onVialConfirmation(medication) calls this Action from the MedicationCapturePage.  It just dispatches the medication object to the medicationsArray state
export const getMedicationArray = (medication) => {
    return (dispatch) => {
                dispatch({
                    type: HYDRATE_MED_ARRAY,
                    payload : medication
                });                
        }
    };
