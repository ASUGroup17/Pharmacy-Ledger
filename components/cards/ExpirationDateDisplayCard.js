import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Item, Icon } from 'native-base';

import ExpirationDateLine from './ExpirationDateLine';
import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common'; 

const ExpirationDateDisplayCard  = ({ medication }) => {
    return (
        <View style={medNameStyles.medicationNameContainer}>
            <ExpirationDateLine/>
            <View style={medNameStyles.medicationNameCheckmarkStyle}>
                    <Item success ={(!medication.expirationDate) ? false : true}>
                    <Input placeholder="Exp#" editable = {true} value ={medication.expirationDate}
                                  placeholderTextColor={commonStyles.text.color} />
                        <Icon name='checkmark-circle' />
                    </Item>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        medication : state.medication
    };
}

export default connect (mapStateToProps)(ExpirationDateDisplayCard);