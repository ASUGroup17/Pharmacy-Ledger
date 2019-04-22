import React from 'react';
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import { View } from 'react-native';
import { Text } from 'native-base';
import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';

export default DuplicateMedicationPopup = (props) => {
        return (
            <Dialog visible={props.visible}
                dialogTitle={
                    <DialogTitle title='Duplicate Vial Has Been Scanned' style={{ backgroundColor: '#cbaded' }} hasTitleBar={true}
                    align="left"/>
                }
                actions={[
                    <DialogButton text="Confirm Duplicate" style={{ backgroundColor: '#cbaded' }} key="confirmMedButton"
                    onPress={props.confirmDuplicate}/>,
                    <DialogButton text="Discard Scan" style={{ backgroundColor: '#cbaded' }} key="DiscardScanButton"
                    onPress={props.makeInvisible}/>
                ]}>
                <DialogContent style={{width:350, flexDirection:'column'}}>
                <View>
                    <Text style={medNameStyles.medicationNameTextStyle}>
                        Duplicate Medication Name: {props.duplicateName}
                    </Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold', color:'#8B008B'}}>
                        You have scanned a medication with the same name more than once, do you want to keep this scan?
                    </Text>
                </View>                            
                </DialogContent>            
            </Dialog>
        )
}