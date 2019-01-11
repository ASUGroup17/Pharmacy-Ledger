import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Text } from 'native-base';
import { commonStyles } from '../../styles/common';

const PatientInfoCard = ( { patient } ) => {
    if (!patient) {
        return( 
            <View>
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Error: Patient is Null
                    </Text>
                </CardItem >
            </View>
        );
    }
        return ( 
            <View>
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Patient ID:{patient.id}  DOB:{patient.dateOfBirth}
                    </Text>
                </CardItem >
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Name: {patient.firstName} {patient.lastName}
                    </Text>
                </CardItem>
            </View>
        );   
}

const mapStateToProps = (state) => {
    console.log("TEST PATIENTINFOCARD state.patient: " + state.patient);
    return {
        patient : state.patient
    };
};

export default connect (mapStateToProps) (PatientInfoCard);