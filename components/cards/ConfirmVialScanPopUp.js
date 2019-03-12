import React from 'react';
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import { View } from 'react-native';
import { Text, Icon } from 'native-base';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';

export default ConfirmVialScanPopUp = (props) => {
    return (
        <Dialog
            /*visible={((props.medication.name !== null && props.medication.lotNumber !== null && props.medication.expirationDate !== null) && (props.visible != false))}*/
            visible={ props.visible }
            
            dialogTitle={
            <DialogTitle title="Confirm Vial Information" style={{ backgroundColor: '#e0f2dc' }} hasTitleBar={true}
                align="left"/>
            }                
            actions={[
            <DialogButton text="Confirm" style={{ backgroundColor: '#e0f2dc' }} key="confirmMedButton"
            onPress= { props.onConfirmVialScanHandler }/>,
            <DialogButton text="Discard Scan" style={{ backgroundColor: '#e0f2dc' }} key="DiscardScanButton"
                onPress={ props.onDiscardScan } />
            ]}
        >

        <DialogContent style={{width:350, flexDirection:'column'}}>
            <View>                      
                <View style={{ flexDirection: 'row' }}>
                    <Text style={medNameStyles.medicationNameTextStyle}>
                    Medication: {props.medication.name}
                    </Text>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={ props.onClearMedicationName }/>  
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={medNameStyles.medicationNameTextStyle}>
                    Lot Number: {props.medication.lotNumber}
                    </Text>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={ props.onClearLotNumber }/>  
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={medNameStyles.medicationNameTextStyle}>
                    Expiration Date: {props.medication.expirationDate}
                    </Text>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={ props.onClearExpirationDate }/>  
                </View>
            </View>
        </DialogContent>

        </Dialog>

    );
}