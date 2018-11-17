import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base'
import { RNCamera } from 'react-native-camera'
import {patientCapturePageStyles as styles} from '../styles/common'

const PendingView = () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Waiting</Text>
        </View>
      );

class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Add Medication'
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            qrcode: "",
            patientID: ""
        }
    }
    onBarCodeRead = (e) => this.setState({patientID: e.data});

    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={styles.contentStyle}>
                    <Text style={{alignSelf: 'center'}}>
                        Scan Patient's Wristband
                    </Text>

                    <RNCamera
                        style={styles.preview}
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

                        <View style={styles.patientIdView}>
                            <Text>
                                Patient ID:
                            </Text>
                            <Input placeholder="Patient ID" value={this.state.patientID}/>
                        </View>
                    <Button bordered style={styles.buttonStyle} onPress={this.continueHandler}
                        disabled={!this.state.patientID}>
                        <Text>
                            Continue
                        </Text>
                    </Button>
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
