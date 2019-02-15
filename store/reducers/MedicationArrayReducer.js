import { HYDRATE_MED_ARRAY } from "../actions/types";

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
        default: 
            return state
        
    }
};