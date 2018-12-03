/**
 * Purpose: This is the screen displayed after the Login Screen.
 * Here we use the camera of an mobile device to capture
 * the barcode of a Patient's Wristband.  Only one patient can be captured at any given time.
 */

import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Icon, Input } from 'native-base'
import { RNCamera } from 'react-native-camera'
import { patientCapturePageStyles as styles, commonStyles, navigatorStyle } from '../styles/common'

class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Add Medication',
            navigatorStyle: navigatorStyle,
            // These props will be passed to the MedicatioCapturePage.
            passProps: {
              patientID: this.state.patientID,
              patientFirstName: "",
              patientLastName: "",
              patientDOB: "",
              medicationName: this.state.medicationName,
              lotNumber: this.state.lotNumber,
              expDate: this.state.expDate
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            /*
             I set patientID to null initially for the 'greencheck mark' logic. Once a barcode is scanned
             the checkmark goes from black to green, and the patientID is not longer null
            */
            patientID: null,
            patientFirstName: "",
            patientLastName: "",
            patientDOB: "",
            medicationName: null,
            lotNumber: null,
            expDate: null
        }
    }

    /*
      Sets the state of this object's patientID to e.data. e is the barcode's info:
      data - textual representation of the barcode; rawData -
      raw data encoded in the barcode; type - the type of barcode detected.
    */
    onBarCodeRead = (e) => this.setState({patientID: e.data});

    render () {
        return (
            <Container style={commonStyles.container}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={commonStyles.content}>
                    <Text style={commonStyles.text}> Scan Patient's Wristband
                    </Text>

                    <RNCamera
                        style={commonStyles.preview}
                        type={RNCamera.Constants.Type.back}
                        //Turned flashMode to off; it was originally on
                        flashMode={RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onBarCodeRead={this.onBarCodeRead}
                        ref={cam => this.camera = cam}
                        //aspect={RNCamera.Constants.Aspect.fill}
                        >
                    </RNCamera>
                    <View style={styles.viewStyle}>
                        <View style={styles.patientIdView}>
                            <Text style={commonStyles.text}> Patient ID: </Text>
                            <Item success ={(this.state.patientID == null) ? false : true}>
                                <Input placeholder="Patient ID" editable = {false} value={this.state.patientID}
                                  placeholderTextColor={commonStyles.text.color} />
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                    <Button bordered style={commonStyles.button} onPress={this.continueHandler}
                        disabled={!this.state.patientID}>
                        <Text>
                            Continue
                        </Text>
                    </Button>
                    </View>
                </View>
                </Content>
            </Container>
        );
    }

    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
      }
};
export default PatientCapturePage;
