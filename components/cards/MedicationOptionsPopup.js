import React from 'react';
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import { View } from 'react-native';
import { Text } from 'native-base';

const MedicationOptionsPopup = (props) => {

return (
  <Dialog
    visible={props.visible}
    onTouchOutside={props.onClose}
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
        onPress={props.onOkay}
        key="button-2"
      />,
      <DialogButton
        text="Cancel"
        style={{
          backgroundColor: '#e0f2dc',
        }}
        onPress={props.onClose}
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
)}

export default MedicationOptionsPopup;
