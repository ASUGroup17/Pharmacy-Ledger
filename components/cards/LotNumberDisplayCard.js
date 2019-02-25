import React from 'react';
import { View } from 'react-native';
import { Item, Icon } from 'native-base';

import LotNumberLine from './LotNumberLine';
import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common'; 


//Creates a Component to be used on the MedicationCapturePage to display Lot No Informaiton with
// proper icons
LotNumberDisplayCard  = ({ props }) => {
        return (
            <View style={medNameStyles.medicationNameContainer}>
                <LotNumberLine/>
                <View style={medNameStyles.medicationNameCheckmarkStyle}>
                    <Item success ={(!props.medication.lotNumber) ? false : true}>
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Icon name='camera' onPress={() =>  {props.onLotNumberCapture(undefined)} }/>
                </View>
            </View>
        );
    }

export default LotNumberDisplayCard;