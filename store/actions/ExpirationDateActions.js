import { HYDRATE_MEDICATION } from "./types";

export const getExpirationDate = (expDate) => {
    const medication = {};
    return (dispatch) => {
        medication.expirationDate = expDate;

        dispatch({
            type : HYDRATE_MEDICATION,
            payload : medication
        })
    }
}