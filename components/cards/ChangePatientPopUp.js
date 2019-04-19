import React from 'react';
import { Text } from 'native-base';
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';

export default ChangePatientPopUp = (props) => {
    return(  
        <Dialog
            visible={props.visible}
            onTouchOutside={ props.onMakeInvisible }
            dialogTitle={
                <DialogTitle
                    title="Change Patient"
                    style={{
                    backgroundColor: '#e0f2dc',
                    }}
                    hasTitleBar={false}
                    align="left"
                />
            }
            actions={[
                <DialogButton
                    text="OK"
                    style={{
                    backgroundColor: '#e0f2dc',
                    }}
                    onPress={ props.onPatientHandler }
                    key="button-2"
                />,
                <DialogButton
                    text="Cancel"
                    style={{
                    backgroundColor: '#e0f2dc',
                    }}
                    onPress={ props.onMakeInvisible }
                    key="button-3"
                />
            ]}
        >
            <DialogContent
            style={{
                backgroundColor: '#e0f2dc',
            }}
            >
            <Text>You are requesting to go back to the Add Patient page. Any medications currently scanned will not be saved. Select OK to continue to Add Patient page.</Text>
            </DialogContent>
        </Dialog>
    );
}