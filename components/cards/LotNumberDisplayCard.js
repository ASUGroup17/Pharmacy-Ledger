import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Item, Icon } from 'native-base';

import LotNumberLine from './LotNumberLine';
import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common'; 


//Creates a Component to be used on the MedicationCapturePage to display Lot No Informaiton with
// proper icons
const LotNumberDisplayCard  = ({ medication }) => {
    return (
        <View style={medNameStyles.medicationNameContainer}>
            <LotNumberLine/>
            <View style={medNameStyles.medicationNameCheckmarkStyle}>
                    <Item success ={(!medication.lotNumber) ? false : true}>
                    <Input placeholder="Lot#" editable = {true} value ={medication.lotNumber}
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
    };}

export default connect (mapStateToProps)(LotNumberDisplayCard);