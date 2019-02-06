import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, CardItem, Button, Text, Input, Item, Icon } from 'native-base'
import { RNCamera } from 'react-native-camera'
import { getMedication } from '../store/actions/MedicationActions';
import { getLotNumber } from '../store/actions/LotNumberActions';
import { getExpirationDate } from '../store/actions/ExpirationDateActions';
import axios from 'axios'
import { medicationCaptureStyles as styles, commonStyles, navigatorStyle } from '../styles/common'
import { insertNewMatch, queryAllMatches } from '../db/allSchemas';
import realm from '../db/allSchemas';
import PatientInfoCard from './cards/PatientInfoCard';
import { capturedLot } from './LotNumberCapture';
import { capturedExpiration } from './ExpirationDateCapture';

var SoundPlayer = require('react-native-sound');
var sound = null;

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
                //An Array of medications passed to confirmation Page
                medicationArray : this.state.medicationArray
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
            barCodeRead: false,
            ndc: null,
            matches: [],
            medicationName: null,
            lotNumber: null,
            expDate: null,
            patientID: this.props.patientID ,
            //patientID: "#PATIENTID",//this.state.patientID,
                patientFirstName: "#FirstName",
                patientLastName: "#LastName",
                patientDOB: "#DOB",
            medicationArray: [ 
                { 
                    medicationName: null,
                    lotNumber : null,
                    expDate : null,
                    //Include an NDC #? concentration? other information?                    
                } ]
                 
        }
        
    }


    //Creates a match when passed the ndc number, the keyword, the field we are searching for
    // and the two word elements involved in the match and adds to DB.
    createMatch = (ndc, keyword, findField, keywordElement, findFieldElement) => {
        console.log("NDC: " + this.state.ndc + " Type of:" + typeof this.state.ndc)
        const match = {
            id: realm.objects(MATCH_SCHEMA).length + 1,
            ndc: ndc.toString(),
            keyword: keyword,
            width: parseFloat(keywordElement.map(b => b.bounds.size.width)),
            height: parseFloat(keywordElement.map(b => b.bounds.size.height)),
            x: parseFloat(keywordElement.map(b => b.bounds.origin.x)),
            y: parseFloat(keywordElement.map(b => b.bounds.origin.y)),
            findX: parseFloat(findFieldElement.map(b => b.bounds.origin.x)),
            findY: parseFloat(findFieldElement.map(b => b.bounds.origin.y)),
            findField: findField
        }

        insertNewMatch(match).then().catch((error) => {
            alert(`Insert new match error ${error}`);
        })

    }

    parseTextBlock = (textBlocks) => { 
        //These two arrays will have the textBlocks added to them 
        let capturedArray = [];    
        textBlocks.forEach(function(element){
            if(element.type == 'element'){
                console.log("TERIN TEST2!")
                console.log("WORD: " + element.value)
                console.log("WORD:Size.width: " + element.bounds.size.width)
                console.log("WORD:Size.height: " + element.bounds.size.height)
                console.log("WORD:point.x: " + element.bounds.origin.x)
                console.log("WORD:point.y: " + element.bounds.origin.y)
                capturedArray.push( { word : element.value, xCoord : element.bounds.origin.x, yCoord : element.bounds.origin.y, height : element.bounds.size.height, width : element.bounds.size.width } );
            }
            else{
                console.log("TERIN TEST3!" + element.type)
                if(element.components.length > 0)
                    this.parseTextBlock(element.components);
            }
        }, this);
        
        const { medication } = this.props;        
        if (!medication.lotNumber) {
            let result = capturedLot(capturedArray);
           // console.log("Kevin: RESULT: " + result);
           // console.log("Kevin: Result LotNumber: " + medication.lotNumber + "---typeOf: " + typeof result);
            if (result != undefined){
                this.props.onLotNumberCapture(result);
            }
        }

        if (!medication.expirationDate) {
            let expResult = capturedExpiration(capturedArray);
            if (expResult != undefined) {
                this.props.onExpirationCapture(expResult);
            }
        }
        //capturedLot(capturedArray);
        //() => this.capturedLot(capturedArray);
        //const { medication } = this.props;
    }

    

    onBarCodeRead = (e) => {
        this.createNdcStrings(e.data)
        this.setState({ barCodeRead: true })
    }


    createNdcStrings  = (ndc) => {
        ndc442 = ndc.substring(2,6) + "-" + ndc.substring(6,10) + "-" + ndc.substring(10,12);
        ndc532 = ndc.substring(2,7) + "-" + ndc.substring(7,10) + "-" + ndc.substring(10,12);
        ndc541 = ndc.substring(2,7) + "-" + ndc.substring(7,11) + "-" + ndc.substring(11,12);
        this.props.onMedicationCapture([ndc442, ndc532, ndc541])
    }

    onTextRecognized = ({ textBlocks }) => {
        var patt1, patt2, patt3, lotExp, expirationExp
        var lotStrings = []
        var expStrings = []
        const keywords = ['batch', 'exp', 'lot', 'espiry'];


        patt1 = new RegExp("[0-9][0-9][0-9][0-9].[0-9][0-9][0-9][0-9].[0-9][0-9]");
        patt2 = new RegExp("[0-9][0-9][0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9]");
        patt3 = new RegExp("[0-9][0-9][0-9][0-9][0-9].[0-9][0-9][0-9][0-9].[0-9]");
        lotExp = new RegExp('lot', 'i');
        expirationExp = new RegExp('exp', 'i');

        detectedTexts = textBlocks.map(b => b.value)
        this.parseTextBlock(textBlocks)

        console.log("TEXTBLOCK: " + detectedTexts)
        var match = patt1.exec(detectedTexts)
        if(!match){
            var match = patt2.exec(detectedTexts)
        }
        if(!match){
            var match = patt3.exec(detectedTexts)
        }
        if(match){
            this.props.onMedicationCapture([match])
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

        // this.props.onMedicationCapture([ndc442, ndc532, ndc541])
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
        }

        /*
        if(this.state.medicationName && this.state.lotNumber && this.state.expDate){
            onPressButtonPlay();
        }
        */


    }



    //     // alert(ndc442 + "\n" + ndc532 + "\n" + ndc541)
    //     this.getMedName(ndc442,ndc532,ndc541)
    // };

    // getMedName = (ndc442,ndc532,ndc541) => {

    //     var names = [];

    //     axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc442)
    //     .then(response => {

    //         if(response.data.ndcStatus.status == "ACTIVE"){
    //             // alert("**TERIN1**" + response.data.ndcStatus.status)
    //             names.push(response.data.ndcStatus.conceptName)
    //             this.setState({medicationName: names[0]})
    //         }
    //     });

    //     axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc532)
    //     .then(response => {

    //         if(response.data.ndcStatus.status == "ACTIVE"){
    //             //alert("**TERIN2**" + response.data.ndcStatus.status)
    //             names.push(response.data.ndcStatus.conceptName)
    //             this.setState({medicationName: names[0]})
    //         }
    //     });

    //     axios.get('https://rxnav.nlm.nih.gov/REST/ndcstatus.json?ndc=' + ndc541)
    //     .then(response => {

    //         if(response.data.ndcStatus.status == "ACTIVE"){
    //             // alert("**TERIN3**" + response.data.ndcStatus.status)
    //             names.push(response.data.ndcStatus.conceptName)
    //             this.setState({medicationName: names[0]})
    //         }
    //     });
        
    // };

    //checkCaptured =();

    //Method to check if this.state.prop has changed, once certain props have changed
        //and been read in (MedicationName, LotNumber and expDate) then the medicationArray will be updated
        //with this new information
        checkCaptured = (getMedName) => {
            //console.log("TEST: Inside CheckCaptured function");
              //if (medicationNameCaptured == true && lotNumberCaptured == true && expDateCaptured == true) {
            if ( this.state.medicationName !== null /*&& this.state.lotNumber !== null && this.state.expDate !== null */) {  
                console.log('TEST: Inside If medName statement.');
                console.log("TEST: medName: " + this.state.medicationName);
                this.globalArray.push(this.state.medicationName);
              /*  
                this.setState(prevState => ({
                    medicationArray: [...prevState.medicationArray, { 'medicationName' : this.state.medicationName, 'lotNumber' : this.state.lotNumber, 'expDate' : this.state.expDate }]
                  }))
                */
                /*this.setState(state => {                    
                    const medicationArray = state.medicationArray.concat( { medicationName : state.medicationName, lotNumber : state.lotNumber, expDate : state.expDate } );

                    return {
                       medicationArray,
                       //medicationName: null,
                       //lotNumber: null,
                       //expDate: null
                    };
              });*/
                
              }//end if statement   
            for (i in this.globalArray) {
                console.log('TEST: ' + this.globalArray[i].medicationName);
            }
              /*
              if (this.state.medicationArray.length == 0){
                    console.log("TEST: ARRAY IS EMPTY");
                }
                */
                
                //console.log("TEST: this.state.array[0]medName: " + this.state.medicationArray[0].medicationName);
//                console.log("TEST: this.state.array[1]medName: " + this.state.medicationArray[1].medicationName);

                /*
                for (i in this.state.medicationArray) {
                    console.log('TEST Array Med Name: ' + this.state.medicationArray[i].medicationName);
                    console.log('TEST LOT Number: ' + this.state.medicationArray[i].lotNumber);
                }*/
                
                
              /*still inside the if; should I se the values to null again so that a new bottle can be scanned?
              this.state.medicationName = null;
              this.state.lotNumber = null;
              this.state.expDate = null;
              */                   
        };


        //------------------------------------------------------------
        componentWillMount(){
            song = new SoundPlayer('ui_confirmation.wav', SoundPlayer.MAIN_BUNDLE, (error) => {
                if(error)
                    console.log('Error when iniliazing', error);
            });
            
        }

        onPressButtonPlay(){
            if(song != null){
                song.play((success) => {
                    if(!success)
                    console.log('Error when playing');
                });
            }
        }
        //------------------------------------------------------------

    render () {
        // This medication variable will represent props, and will be updated accordingly whenever mapStateToProps is called
        //The Different attributes used for the medication object are defined in the MedsReducer.js file
        const { medication } = this.props;
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
                        
                        // onBarCodeRead= {(this.props.medication.medicationName == "") ? this.onBarCodeRead : null}

                        onBarCodeRead= {!this.state.barCodeRead ? this.onBarCodeRead : null}
                        onTextRecognized={this.onTextRecognized}
                        ref={cam => this.camera = cam}
                        >
                    </RNCamera>
                {/*
                PatientInfoCard contains the Patient Info displayed just below the Camera screen.
                Located in ..components/cards/PatientInfoCard.js   -1/10/2019 KN
                */}
                    <PatientInfoCard />                
                    <View style={styles.groupTight}>
                        <View style={styles.viewStyle}>
                            <Text style={commonStyles.text}>
                                Medication:
                            </Text>
                            <Item success ={(!medication.name) ? false : true}>
                                <Input placeholder="Medication Name" editable = {false} value={medication.name}
                                  placeholderTextColor={commonStyles.text.color} />
                                <Icon name='checkmark-circle' />
                                
                            </Item>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text style={commonStyles.text}>
                                Lot#:
                            </Text>
                            <Item success ={(!medication.lotNumber) ? false : true}>
                                <Input placeholder="Lot#" editable = {false} value ={medication.lotNumber}
                                  placeholderTextColor={commonStyles.text.color} />
                                <Icon name='checkmark-circle' />
                            </Item>
                            <Item success ={(!medication.lotNumber) ? false : true}>
                                {this.onPressButtonPlay(this)}
                            </Item>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text style={commonStyles.text}>
                                Expiration Date:
                            </Text>
                            <Item success ={(!medication.expirationDate) ? false : true}>
                                <Input placeholder="Expiration Date" editable = {false} value={medication.expirationDate}
                                  placeholderTextColor={commonStyles.text.color} />
                                <Icon name='checkmark-circle' />
                            </Item>
                        </View>
                    </View>
                    <Button bordered style={commonStyles.button} onPress={this.continueHandler}>
                        <Text>
                            Continue
                        </Text>
                    </Button>
                    <Button bordered style={commonStyles.button} onPress={this.onPressButtonPlay.bind(this)}>
                        <Text>
                            Play
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


const mapStateToProps = ({ medication, patient }) => {
    return {
        medication,
        patient
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onMedicationCapture: (ndcNumbers) => dispatch(getMedication(ndcNumbers)),
        onLotNumberCapture: (lotNumber) => dispatch (getLotNumber(lotNumber)),
        onExpirationCapture: (expDate) => dispatch (getExpirationDate(expDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationCapturePage);
