import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Input } from 'native-base'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import {medicationCaptureStyles as styles} from '../styles/common'

// const PendingView = () => (
//         <View
//           style={{
//             flex: 1,
//             //backgroundColor: 'lightgreen',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text>Waiting</Text>
//         </View>
//       );


class MedicationCapturePage extends Component {


    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.ConfirmationPage',
            title: 'Confirm Transaction'
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            medicationUpc: "",
            medicationName: "",
            lotNumber: "",
            expDate: ""
        }
    }
    onBarCodeRead = (e) => {
        alert(e.data)
        alert(e.rawData)
        alert(e.type)
        this.setState({medicationUpc: e.data}, () => {
            this.createNdcStrings(this.state.medicationUpc);
        })
    };

    onTextRecognized = ({textBlocks}) => {
        detectedTexts = textBlocks.map(b => b.value)
        console.log("TEXTBLOCK: " + detectedTexts)
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

        //alert(names.length + " " + names)

    };

    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={styles.contentStyle}>
                    <Text style={{alignSelf: 'center'}}>
                        Scan Medication
                    </Text>

                    <RNCamera
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}

                        onBarCodeRead= {(this.state.medicationName == "") ? this.onBarCodeRead : null}
                        //onBarCodeRead = {this.onBarCodeRead}
                        onTextRecognized={this.onTextRecognized}
                        ref={cam => this.camera = cam}
                        >
                        {/* {({ camera, status }) => {
                            if (status !== 'READY') return <PendingView />;
                            return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                <Text style={{ fontSize: 14 }}> Capture Image </Text>
                                </TouchableOpacity>
                            </View>
                            );
                        }} */}
                            <Text style={{
                                backgroundColor: 'white'
                            }}>{this.state.medicationUpc}</Text>
                    </RNCamera>

                    <View style={styles.groupTight}>
                        <View style={styles.viewStyle}>
                            <Text>
                                Medication:
                            </Text>
                            <Input placeholder="Medication Name" value={this.state.medicationName}/>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>
                                Lot#:
                            </Text>
                            <Input placeholder="Lot#" />
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>
                                Expiration Date:
                            </Text>
                            <Input placeholder="Expiration Date" />
                        </View>
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

export default MedicationCapturePage;
