import React from 'react';
import { ScrollView, View } from 'react-native'
import { Text, Icon } from 'native-base';
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';

import { medicationDataDisplayStyles  as medNameStyles } from '../../styles/common';


export default ShoppingCartPopUp = (props) => {
    return(
        <Dialog
            visible={props.visible}
            onTouchOutside={ props.onMakeInvisible }
            dialogTitle={
                <DialogTitle
                    title="Scanned Medications"
                    style={{ backgroundColor: '#e0f2dc' }}
                    hasTitleBar={false}
                    align="left"
                />
            }
            actions={[ <DialogButton text="OK" style={{backgroundColor: '#e0f2dc' }}
                onPress={ props.onMakeInvisible }
                key="button-4" /> ]}
        >
            <ScrollView endFillColor='#e0f2dc' centerContent='true'>
                <DialogContent
                style={{
                    width:350,
                    backgroundColor: '#e0f2dc',
                }}
                >                    
                {props.medicationsArray.map((med) =>
                <View  key={med.medID}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={medNameStyles.medicationNameTextStyle}>
                        Medication: {med.name}
                        </Text>
                        <Icon type='Ionicons' name='md-reverse-camera' onPress={ props.onClearMedicationName }/>  
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={medNameStyles.medicationNameTextStyle}>
                        Lot Number: {med.lotNumber}
                    </Text>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={ props.onClearLotNumber }/>  
                    </View>
                    <View style={{ flexDirection: 'row', bottomBorderColor:'black', borderBottomWidth:1}}>
                    <Text style={medNameStyles.medicationNameTextStyle}>
                        Expiration Date: {med.expirationDate}
                    </Text>
                    <Icon type='Ionicons' name='md-reverse-camera' onPress={ props.onClearExpirationDate }/>  
                    </View>
                </View>
                )
                }
                
                </DialogContent>
            </ScrollView>
        </Dialog>
    );
}