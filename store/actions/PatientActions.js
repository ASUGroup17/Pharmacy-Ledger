import {
    HYDRATE_PATIENT
} from './types'


export const hydratePatientData = (data) => { // expects an array as argument
    const patientData = { id: data } // TODO: hydrate all data
    return (dispatch) => {
        dispatch({
            type: HYDRATE_PATIENT,
            payload: patientData
        })
    }
}