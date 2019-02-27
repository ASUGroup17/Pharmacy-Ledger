import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Item, Icon } from 'native-base';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';
import MedicationNameLine from './MedicationNameLine';

//This is a reuseable component that will display the medication name, the checkmark and the camera icon.
//The CSS styling for this is defined in styles/common.js under medicationNameStyles
const MedicationNameDisplayCard = ({ props }) => {
        return(            
            <View style={medNameStyles.medicationNameContainer}>              
                <MedicationNameLine/>              
                <View style={medNameStyles.medicationNameCheckmarkStyle}>
                    <Item success ={(!props.medication.name) ? false : true}>
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={() =>  {props.onMedicationCapture(undefined)} }/>
                </View>
            </View>
        );
}

export default MedicationNameDisplayCard;