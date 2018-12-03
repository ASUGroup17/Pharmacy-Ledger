import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, CardItem, Button, Text, Input, Item, Icon } from 'native-base'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import { medicationCaptureStyles as styles, commonStyles, navigatorStyle } from '../styles/common'
import { insertNewMatch, queryAllMatches } from '../db/allSchemas';
import realm from '../db/allSchemas';

class MedicationCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.ConfirmationPage',
            title: 'Confirm Transaction',
            navigatorStyle: navigatorStyle,

            /*
              Passing these props to the next Screen (ConfirmationPage)
              that will be pushed to the Navigator Stack.
            */
            passProps: {
                //These first 4 are from the MedicationCapturePage
                ndc: this.state.ndc,
                medicationName: this.state.medicationName,
                lotNumber: this.state.lotNumber,
                expDate: this.state.expDate,
                /*
                  These 4 come from the passProps of the Patient Capture page;
                  currently patientID code is the only valid data being used.
                */
                patientID: this.state.patientID,
                patientFirstName: this.state.patientFirstName,
                patientLastName: this.state.patientLastName,
                patientDOB: this.state.patientDOB
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            /*
            -These three state props are being defined initially as null for the 'green check mark' logic,
            once this information is properly captured, the checkmark will go from black to green.
            -This line(179 at the time) :onBarCodeRead= {(this.state.medicationName == null) ? this.onBarCodeRead : null}
                had its logic changed as well. As far as I can tell this did not adversely change the app. Still works as intended.
            */
            ndc: null,
            medicationName: null,
            lotNumber: null,
            expDate: null,
            patientID: this.props.patientID ,
            //patientID: "#PATIENTID",//this.state.patientID,
                patientFirstName: "#FirstName",
                patientLastName: "#LastName",
                patientDOB: "#DOB"
        }
    }
    onBarCodeRead = (e) => {
        this.setState({ndc: e.data}, () => {
            this.createNdcStrings(this.state.ndc);
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

        /*
          Grab information about each work in the detected text
          and log information about it's position.
          List <? extends vision.Text> textComponents;
          textComponents = lotStrings.getComponents();
        */
        if(lotStrings[0]){
            printText = lotStrings[0].map(b => b.value)
            console.log("LOTSTRINGS14: " + printText)
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
            console.log("EXPSTRINGS14: " + printText2)
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

    //Creates a match when passed the ndc number, the keyword, the field we are searching for
    // and the two word elements involved in the match.
    createMatch = (ndc, keyword, findField, keywordElement, findFieldElement) => {
        match = {
            ndc: ndc,
            keyword: keyword,
            width: keywordElement.map(b => b.bounds.size.width),
            height: keywordElement.map(b => b.bounds.size.height),
            x: keywordElement.map(b => b.bounds.origin.x),
            y: keywordElement.map(b => b.bounds.origin.y),
            findX: findFieldElement.map(b => b.bounds.origin.x),
            findY: findFieldElement.map(b => b.bounds.origin.y),
            findField: findField
        }

        this.addMatch(match);
    }

    //Adds the match to the database
    addMatch = (match) => {

    }

    //Queries database for match by NDC number
    getMatch = (ndc) => {

    }

    createNdcStrings  = (ndc) => {
        ndc442 = ndc.substring(2,6) + "-" + ndc.substring(6,10) + "-" + ndc.substring(10,12);
        ndc532 = ndc.substring(2,7) + "-" + ndc.substring(7,10) + "-" + ndc.substring(10,12);
        ndc541 = ndc.substring(2,7) + "-" + ndc.substring(7,11) + "-" + ndc.substring(11,12);

        // alert(ndc442 + "\n" + ndc532 + "\n" + ndc541)
        this.getMedName(ndc442,ndc532,ndc541)
    };

    getMedName = (ndc442,ndc532,ndc541) => {

        var names = [];

        axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc442)
        .then(response => {

            if(response.data.ndcStatus.status == "ACTIVE"){
                // alert("**TERIN1**" + response.data.ndcStatus.status)
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
                // alert("**TERIN3**" + response.data.ndcStatus.status)
                names.push(response.data.ndcStatus.conceptName)
                this.setState({medicationName: names[0]})
            }
        });
    };

    render () {
        return (
            <Container style={commonStyles.container}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={commonStyles.content}>
                    <Text style={{alignSelf: 'center'}}>
                        Scan Medication
                    </Text>

                    <RNCamera
                        style={commonStyles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}

                        onBarCodeRead= {(this.state.medicationName == null) ? this.onBarCodeRead : null}
                        onTextRecognized={this.onTextRecognized}
                        ref={cam => this.camera = cam}
                        >
                    </RNCamera>
                {/*
                This view contains the Patient Info displayed just below the Camera screen.
                */}
                <View>
                    <CardItem style = {commonStyles.patientInfoStyle}>
                        <Text style= { { color : 'white' } }>
                            Patient ID:{this.state.patientID}  DOB:{this.state.patientDOB}
                        </Text>
                    </CardItem >
                    <CardItem style = {commonStyles.patientInfoStyle}>
                        <Text style = { { color: 'white' } }>
                            Name: {this.state.patientLastName} {this.state.patientFirstName}
                        </Text>
                    </CardItem>
                </View>
                    <View style={styles.groupTight}>
                        <View style={styles.viewStyle}>
                            <Text>
                                Medication:
                            </Text>
                            <Item success ={(this.state.medicationName == null) ? false : true}>
                                <Input placeholder="Medication Name" editable = {false} value={this.state.medicationName}/>
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>
                                Lot#:
                            </Text>
                            <Item success ={(this.state.lotNumber == null) ? false : true}>
                                <Input placeholder="Lot#" editable = {false} value ={this.state.lotNumber} />
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>
                                Expiration Date:
                            </Text>
                            <Item success ={(this.state.expDate == null) ? false : true}>
                                <Input placeholder="Expiration Date" editable = {false} value={this.state.expDate} />
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                    </View>
                    <Button bordered style={commonStyles.button} onPress={this.continueHandler}>
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
        // eslint-disable-next-line
        console.log(data.uri);
      }
}
export default MedicationCapturePage;
