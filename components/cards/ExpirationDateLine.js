import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';

const ExpirationDateLine = ({medication}) => {
    if (!medication.expirationDate) {
        return (
            <View style={medNameStyles.medicationNameTextStyle}>
                <Text>
                    Exp Date:
                </Text>
            </View>
        );    
    };

    return (
        <View style={medNameStyles.medicationNameTextStyle}>
            <Text>
                Exp Date: {medication.expirationDate}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        medication : state.medication
    };
};

export default connect (mapStateToProps)(ExpirationDateLine);