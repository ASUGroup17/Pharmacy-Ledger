/**
 * Purpose: This is the screen displayed after the Login Screen.
 * Here we use the camera of an mobile device to capture
 * the barcode of a Patient's Wristband.  Only one patient can be captured at any given time.
 */

import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Icon, Input, Row } from 'native-base'
import { connect } from 'react-redux'
import { RNCamera } from 'react-native-camera'

import { hydratePatientData } from '../store/actions/PatientActions'
import { patientCapturePageStyles as styles, commonStyles, navigatorStyle } from '../styles/common'
import PatientInfoCard from './cards/PatientInfoCard';
import Orientation from 'react-native-orientation';

// For sounds
var SoundPlayer = require('react-native-sound');
var sound = null;

class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Medication', //title: 'Add Medication',
            navigatorStyle: navigatorStyle,
            // These props will be passed to the MedicatioCapturePage.
        })
    }

    constructor(props) {
        super(props);
    }

    // For audible sounds
    //------------------------------------------------------------
    componentWillMount(){
        song = new SoundPlayer('ui_confirmation.wav', SoundPlayer.MAIN_BUNDLE, (error) => {
            if(error)
                console.log('Error when iniliazing', error);
        });

        Orientation.lockToPortrait();
        
    }

    onPressButtonPlay(event){
        if(song != null){
            song.play((success) => {
                if(!success)
                console.log('Error when playing');
            });
        }
    }
    //------------------------------------------------------------

    /*
      Sets the state of this object's patientID to e.data. e is the barcode's info:
      data - textual representation of the barcode; rawData -
      raw data encoded in the barcode; type - the type of barcode detected.
    */
    onBarCodeRead = (e) => this.props.onPatientCapture(e.data)

    render () {
        // destructures patient from this.props object
        const { patient } = this.props
        return (
            <Container style={commonStyles.container}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={commonStyles.content2}>
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
                    <PatientInfoCard />
                    <View style={styles.viewStyle}>
                        <View style={styles.patientIdView}>
                            <Text style={commonStyles.text}> Patient ID: </Text>
                            <Item success ={!patient.id ? false : true}>
                               <Input placeholder="Patient ID" editable = {false}
                                placeholderTextColor={commonStyles.text.color}> 
                                    <Text style={commonStyles.text} placeholder="Patient ID">
                                        {patient.id}
                                    </Text>
                               </Input>
                                <Icon name='checkmark-circle' />  
                            </Item>
                            <Item  success={!patient.id ? false : true}>
                                {this.onPressButtonPlay(this)}
                            </Item>
                        </View>  
                        <Row>
                            <Button style={commonStyles.button} onPress={this.continueHandler}
                                disabled={!patient.id}>
                                <Text>
                                    Continue
                                </Text>
                            </Button>
                        </Row>
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
}

const mapStateToProps = ({ patient }) => {
    return {
        patient
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPatientCapture: (data) => dispatch(hydratePatientData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientCapturePage);
