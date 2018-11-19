import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Input, Item, Icon } from 'native-base'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import {medicationCaptureStyles as styles, commonStyles} from '../styles/common'



class MedicationCapturePage extends Component {


    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.ConfirmationPage',
            title: 'Confirm Transaction',
            
            //Passing these props to the next Screen (ConfirmationPage) that will be pushed to the Navigator Stack
            passProps: {
                //These first 4 are from thr MedicationCapturePage
                medicationUpc: "",
                medicationName: this.state.medicationName,
                lotNumber: this.state.lotNumber,
                expDate: this.state.expDate,
                //These 4 come from the passProps of the Patient Capture page; currently patientID code is the only valid data being used
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
            medicationUpc: "",
            medicationName: this.props.medicationName ,
            lotNumber: this.props.lotNumber ,
            expDate: this.props.expDate, 
            patientID: this.props.patientID 
        }
    }
    onBarCodeRead = (e) => {
        this.setState({medicationUpc: e.data}, () => {
            this.createNdcStrings(this.state.medicationUpc);
        })
    };

    onTextRecognized = ({textBlocks}) => {
        var patt1, patt2, patt3, lotExp, expirationExp
        var lotStrings = []
        var expStrings = []

        patt1 = new RegExp("[0-9][0-9][0-9][0-9].[0-9][0-9][0-9][0-9].[0-9][0-9]");
        patt2 = new RegExp("[0-9][0-9][0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9]");
        patt3 = new RegExp("[0-9][0-9][0-9][0-9][0-9].[0-9][0-9][0-9][0-9].[0-9]");
        lotExp = new RegExp('lot', 'i');
        expirationExp = new RegExp('exp', 'i');

        detectedTexts = textBlocks.map(b => b.value)
        console.log("TEXTBLOCK: " + detectedTexts)
        var match = patt1.exec(detectedTexts)
        if(!match){
            var match = patt2.exec(detectedTexts)
        }
        if(!match){
            var match = patt3.exec(detectedTexts)
        }

        if(match){
            this.getMedName(match,null,null)
        }

        if(lotExp.test(detectedTexts)){
            lotStrings.push(textBlocks)
        }
        if(expirationExp.test(detectedTexts)){
            expStrings.push(textBlocks)
        }

        //Grab information about each work in the detected text and log information about it's position.
        // List <? extends vision.Text> textComponents;
        // textComponents = lotStrings.getComponents();
        
        if(lotStrings[0]){
            printText = lotStrings[0].map(b => b.value)
            console.log("LOTSTRINGS13: " + printText)
            printText = lotStrings[0].map(b => b.bounds.size.width)
            console.log("STRINGS:Size.width: " + printText)
            printText = lotStrings[0].map(b => b.bounds.size.height)
            console.log("STRINGS:Size.height: " + printText)
            printText = lotStrings[0].map(b => b.bounds.origin.x)
            console.log("STRINGS:point.x: " + printText)
            printText = lotStrings[0].map(b => b.bounds.origin.y)
            console.log("STRINGS:point.y: " + printText)
        }


        if(expStrings[0]){
            printText2 = expStrings[0].map(b => b.value)
            console.log("EXPSTRINGS13: " + printText2)
            printText = expStrings[0].map(b => b.bounds.size.width)
            console.log("STRINGS:Size.width: " + printText)
            printText = expStrings[0].map(b => b.bounds.size.height)
            console.log("STRINGS:Size.height: " + printText)
            printText = expStrings[0].map(b => b.bounds.origin.x)
            console.log("STRINGS:point.x: " + printText)
            printText = expStrings[0].map(b => b.bounds.origin.y)
            console.log("STRINGS:point.y: " + printText)
        }

    }

    createNdcStrings  = (medicationUpc) => {
        ndc442 = medicationUpc.substring(2,6) + "-" + medicationUpc.substring(6,10) + "-" + medicationUpc.substring(10,12);
        ndc532 = medicationUpc.substring(2,7) + "-" + medicationUpc.substring(7,10) + "-" + medicationUpc.substring(10,12);
        ndc541 = medicationUpc.substring(2,7) + "-" + medicationUpc.substring(7,11) + "-" + medicationUpc.substring(11,12);

        //alert(ndc442 + "\n" + ndc532 + "\n" + ndc541)
        this.getMedName(ndc442,ndc532,ndc541)

    };

    getMedName = (ndc442,ndc532,ndc541) => {

        var names = [];

        axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc442)
        .then(response => {

            if(response.data.ndcStatus.status == "ACTIVE"){
                //alert("**TERIN1**" + response.data.ndcStatus.status)
                names.push(response.data.ndcStatus.conceptName)
                this.setState({medicationName: names[0]})
            }
        });

        axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc532)
        .then(response => {

            if(response.data.ndcStatus.status == "ACTIVE"){
                //alert("**TERIN2**" + response.data.ndcStatus.status)
                names.push(response.data.ndcStatus.conceptName)
                this.setState({medicationName: names[0]})
            }
        });

        axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc541)
        .then(response => {

            if(response.data.ndcStatus.status == "ACTIVE"){
                //alert("**TERIN3**" + response.data.ndcStatus.status)
                names.push(response.data.ndcStatus.conceptName)
                this.setState({medicationName: names[0]})
            }
        });

    };

    render () {
        return (
            <Container style={commonStyles.containerStyle}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={commonStyles.contentStyle2}>
                    <Text style={{alignSelf: 'center'}}>
                        Scan Medication
                    </Text>

                    <RNCamera
                        style={commonStyles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}

                        onBarCodeRead= {(this.state.medicationName == "") ? this.onBarCodeRead : null}
                        onTextRecognized={this.onTextRecognized}
                        ref={cam => this.camera = cam}
                        >
                    </RNCamera>

                    <View style={styles.groupTight}>
                        <View style={styles.viewStyle}>
                            <Text>
                                Medication:
                            </Text>
                            <Item success ={(this.state.medicationName == "") ? false : true}>
                                <Input placeholder="Medication Name" value={this.state.medicationName}/>
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>
                                Lot#:
                            </Text>
                            <Item success ={(this.state.lotNumber == "") ? false : true}>
                                <Input placeholder="Lot#" value ={this.state.lotNumber} />
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>
                                Expiration Date:
                            </Text>
                            <Item success ={(this.state.expDate == "") ? false : true}>
                                <Input placeholder="Expiration Date" value={this.state.expDate} />
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                    </View>
                    <Button bordered style={commonStyles.buttonStyle} onPress={this.continueHandler}>
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

export default MedicationCapturePage;
