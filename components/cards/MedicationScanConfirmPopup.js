import React, { Component } from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';
import  MedicationNameLine  from './MedicationNameLine';


const MedicationScanConfirmPopup = (props) => {
    
return (
        <View style={medNameStyles.medicationNameTextStyle}>
{/*        <Text>
            Medication: {props.medObject.name}
</Text>*/}
<MedicationNameLine/>
    </View>
    )}

 
//DO I NEED TO IMPLEMENT CONNECT HERE AS WELL?
/*const mapStateToProps = (state) => {
    return {
        medication : state.medication
    };
};

export default connect (mapStateToProps)(MedicationScanConfirmPopup);*/

export default connect () (MedicationScanConfirmPopup);