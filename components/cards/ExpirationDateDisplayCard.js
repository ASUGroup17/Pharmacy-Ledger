import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Item, Icon } from 'native-base';

import ExpirationDateLine from './ExpirationDateLine';
import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common'; 

const ExpirationDateDisplayCard  = ({ props }) => {
    return (
        <View style={medNameStyles.medicationNameContainer}>
            <ExpirationDateLine/>
            <View style={medNameStyles.medicationNameCheckmarkStyle}>
                    <Item success ={(!props.medication.expirationDate) ? false : true}>
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={() =>  {props.onExpirationCapture(undefined)} }/>
            </View>
        </View>
    );
}

export default ExpirationDateDisplayCard;