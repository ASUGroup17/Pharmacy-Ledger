import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base'
import { RNCamera } from 'react-native-camera'
    


class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Add Medication',
            passProps: { 
                qrCode: this.state.qrcode, 
                patientFirstName: "", 
                patientLastName: "",
                patientDOB: ""
            }
        })
    }    

    
    constructor(props) {
        super(props);
        this.state = { 
            qrcode: "",
            patientfirstname: "",
            patientlastname: "",
            patientdob: ""            
            }
    }

    //Sets the state of this object's qrcode to e.data.  e is the barcode's info:
    // data - textual representation of the barcode;  rawData - raw data encoded in the barcode; type - the type of barcode detected 
    onBarCodeRead = (e) => this.setState({qrcode: e.data});

    //This function is meant to set the e.data as props to be passed to MedicationCapturePage.js
    //we will make 'this.props.(CALLBACK) (e.data)' able to be called in the MedicationCapturepage
    /*
    qrDataPassed = (e) => {
        this.props.qrDataCallback(e.data);
    }*/


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
                            <Text style={{
                                backgroundColor: 'white'
                            }}>{this.state.qrcode}</Text>                       
                    </RNCamera>


                        <View style={styles.patientIdView}>
                            <Text>
                                Patient ID:
                            </Text>
                            <Input placeholder="Patient ID" />
                        </View>
                    <Button bordered style={styles.buttonStyle} onPress={this.continueHandler}>
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
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    contentStyle: {
        flex: 1,
        flexGrow: 1,
        //alignItems: 'center',
        justifyContent: 'space-around',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
    patientIdView: {
        flex: .2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 50
    },
    buttonStyle: {
        alignSelf: 'center'
    }


})

export default PatientCapturePage;