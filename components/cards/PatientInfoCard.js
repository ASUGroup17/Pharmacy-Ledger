import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Text } from 'native-base';
import { commonStyles } from '../../styles/common';
import { hydratePatientData } from '../../store/actions/PatientActions';

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
                        Patient ID:{patient}  DOB:{patient}
                    </Text>
                </CardItem >
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Name: {patient} {patient}
                    </Text>
                </CardItem>
            </View>
        );   
}

const mapStateToProps = (state) => {
    return {
        //relatively sure these are incorrect
        firstName: state.firstName,
        lastName: state.lastName,
        dob : state.dob,
        id : state.id
    };
};

export default connect (mapStateToProps) (PatientInfoCard);