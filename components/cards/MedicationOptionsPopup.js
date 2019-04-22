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
        title="Confirmed!"
        style={{
          backgroundColor: '#cbaded',
        }}
        hasTitleBar={false}
        align="center"
      />
    }
    actions={[
      <DialogButton
        text="Scan Another Medication"
        style={{
          backgroundColor: '#cbaded',
        }}
        onPress={props.onAddAnotherMed}
        key="button-1"
      />,
      <DialogButton
        text="View Shopping Cart"
        style={{
          backgroundColor: '#cbaded',
        }}
        onPress={props.onViewCart}
        key="button-2"
      />,
      <DialogButton
        text="Finalize List of Medications"
        style={{
          backgroundColor: '#cbaded',
        }}
        onPress={props.onFinalize}
        key="button-3"
      />,
      <DialogButton
        text="Cancel"
        style={{
          backgroundColor: '#cbaded',
        }}
        onPress={props.onClose}
        key="button-4"
      />
    ]}
  >
  <DialogContent
    style={{
      backgroundColor: '#cbaded',
    }}
  >
    <Text>What would you like to do next?</Text>
  </DialogContent>
  </Dialog>
)}

export default MedicationOptionsPopup;
