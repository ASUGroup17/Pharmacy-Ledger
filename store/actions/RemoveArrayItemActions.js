import { DELETE_ARRAY_ITEM } from './types';

export const  removeMedicationArrayItem = (medication) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ARRAY_ITEM,
            payload: medication
        })
    }

}