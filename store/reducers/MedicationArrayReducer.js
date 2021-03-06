import { HYDRATE_MED_ARRAY, DELETE_ARRAY_ITEM } from "../actions/types";

const INITIAL_STATE =  {
    medicationsArray: [] 
}

export default (state = INITIAL_STATE, action) => { 

    switch (action.type){
        case HYDRATE_MED_ARRAY: {
            return {
                ...state,
                medicationsArray: [...state.medicationsArray, action.payload ] 
            }
        }
        case DELETE_ARRAY_ITEM: {
            return {
                ...state,
                medicationsArray: state.medicationsArray.filter(element => element.medID != action.payload)
            }
        }
        default: 
            return state
        
    }
};