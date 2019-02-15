import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Text } from 'native-base';

import { commonStyles, patientInfoCardStyles } from '../../styles/common';

//If the patient value that's passed is invalid, and error will show on screen.  This should occur if the user isn't in the system,
// but this isn't tested.
const PatientInfoCard = ( { patient } ) => {
    if (patient.id === undefined) {
        return( 
            <View>
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Error: Patient ID is not in the system
                    </Text>
                </CardItem >
            </View>
        );
    }

    //This function determines if The Date of Birth will display or not; there were some formatting issues that required this check
    function DOBRenders (patient) {
        if (!patient.birthDay || !patient.birthMonth || !patient.birthYear) {
            return (<Text style={patientInfoCardStyles.patient_DOBStyle}>DOB:</Text>);
        }
        else {
            return (<Text style={patientInfoCardStyles.patient_DOBStyle}>DOB: {patient.birthMonth}/{patient.birthDay}/{patient.birthYear}
            </Text>);
        }
    }


        return ( 
            <View>
                <CardItem style = {patientInfoCardStyles.patient_ID_DOB_Style}>
                    <Text  style={patientInfoCardStyles.patient_IDStyle}s>
                        Patient ID: {patient.id}
                    </Text>  
                    {DOBRenders(patient)}
                </CardItem>  
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Name: {patient.firstName} {patient.lastName}
                    </Text>
                </CardItem>
            </View>
        );   
}

const mapStateToProps = (state) => {
    return {
        patient : state.patient
    };
};

export default connect (mapStateToProps) (PatientInfoCard);