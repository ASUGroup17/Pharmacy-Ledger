/**
 * Purpose: This is the screen displayed after the Login Screen.  Here we use the camera of an mobile device to capture
 * the barcode of a Patient's Wristband.  Only one patient can be captured at any given time.  
 */

import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base'
import { RNCamera } from 'react-native-camera'
import {patientCapturePageStyles as styles, commonStyles} from '../styles/common'
    

class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Add Medication',
            //These props will be passed to the MedicatioCapturePage
            passProps: { 
            patientID: this.state.patientID, 
            patientFirstName: "", 
            patientLastName: "",
            patientDOB: ""
            }     
        })
    }

    
    constructor(props) {
        super(props);
        this.state = { 
            patientID: "",
            patientFirstName: "",
            patientLastName: "",
            patientDOB: ""            
            }
    }

    //Sets the state of this object's patientID to e.data.  e is the barcode's info:
    // data - textual representation of the barcode;  rawData - raw data encoded in the barcode; type - the type of barcode detected 
    onBarCodeRead = (e) => this.setState({patientID: e.data});



    render () {
        return (
            <Container style={commonStyles.containerStyle}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={commonStyles.contentStyle}>
                    <Text style={{alignSelf: 'center'}}>
                        Scan Patient's Wristband
                    </Text>

                    <RNCamera
                        style={commonStyles.preview2}
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
                            <Text>
                                Patient ID:
                            </Text>
                            <Input placeholder="Patient ID" value={this.state.patientID}/>
                        </View>
                    <Button bordered style={commonStyles.buttonStyle} onPress={this.continueHandler}
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
