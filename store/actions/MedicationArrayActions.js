import { HYDRATE_MED_ARRAY } from './types';

export const getMedicationArray = (medication) => {
    /*const newMedication = {
        name : "",
        lotNumber : "",
        expirationDate : ""
    };*/
    const medicationsArray = [{
        name : "",
        lotNumber : "",
        expirationDate : ""
    }];
    return (dispatch) => {

        medicationsArray[0].name = medication.name;
        medicationsArray[0].lotNumber = medication.lotNumber;
        medicationsArray[0].expirationDate = medication.expirationDate;
        
        dispatch({
            type: HYDRATE_MED_ARRAY,
            payload : medicationsArray
        });
    }
};

//const medicationsArray = [];
    /*
    console.log("Kevin Array name: " + medication.name);
    console.log("Kevin Array lot: " + medication.lotNumber);
    console.log("Kevin Array exp: " + medication.expirationDate);*/