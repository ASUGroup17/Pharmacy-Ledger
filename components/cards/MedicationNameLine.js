import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';

//This exports a single line of Medication with a name.  
//I do see a problem using an array of medications, with the 'if' logic used here

// THis is used on the MedicationCapture Page, could be used in the shopping cart, Confirm after Scan PopUp and the Finalize Screen

const MedicationNameLine = ({medication}) => {
    if (!medication.name) {
        return (
            <View style={medNameStyles.medicationNameTextStyle}>
                <Text>
                    Medication:
                </Text>
            </View>
        );    
    };

    return (
        <View style={medNameStyles.medicationNameTextStyle}>
            <Text>
                Medication: {medication.name}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        medication : state.medication
    };
};

export default connect (mapStateToProps)(MedicationNameLine);