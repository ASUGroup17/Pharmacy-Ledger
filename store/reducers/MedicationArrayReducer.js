import { HYDRATE_MED_ARRAY } from "../actions/types";

const INITIAL_STATE =  [
    {
        name : "med1",
        lotNumber: '12345',
        expirationDate : "04/2019"
    },
    {
        name : "med2",
        lotNumber: '6789',
        expirationDate : "09/2020"
    }
] 

export default (state = INITIAL_STATE, action) => { 

    switch (action.type){
        case HYDRATE_MED_ARRAY: {
            return { ...state, ...action.payload }
        }
        default: {
            return { state }
        }
    }
};