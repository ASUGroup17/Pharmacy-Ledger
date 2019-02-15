import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';

const LotNumberLine = ({medication}) => {
    if (!medication.lotNumber) {
        return (
            <View style={medNameStyles.medicationNameTextStyle}>
                <Text>
                    Lot No:
                </Text>
            </View>
        );    
    };

    return (
        <View style={medNameStyles.medicationNameTextStyle}>
            <Text>
                Lot No: {medication.lotNumber}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        medication : state.medication
    };
};

export default connect (mapStateToProps)(LotNumberLine);