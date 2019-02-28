import React, {Component} from 'react';
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Text, Icon } from 'native-base'
import { RNCamera } from 'react-native-camera'
import realm from '../db/allSchemas';
import PatientInfoCard from './cards/PatientInfoCard';
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';

import { getMedication } from '../store/actions/MedicationActions';
import { getLotNumber } from '../store/actions/LotNumberActions';
import { getExpirationDate } from '../store/actions/ExpirationDateActions';
import { getMedicationArray } from '../store/actions/MedicationArrayActions';
import { getMedicationID } from '../store/actions/MedicationIDActions';
import { medicationCaptureStyles as styles, commonStyles, navigatorStyle } from '../styles/common'
import { insertNewMatch } from '../db/allSchemas';
import { capturedTextBlocksLot } from './LotNumberCapture';
import { capturedTextBlocksExpiration } from './ExpirationDateCapture';
import MedicationNameDisplayCard from './cards/MedicationNameDisplayCard';
import LotNumberDisplayCard from './cards/LotNumberDisplayCard';
import ExpirationDateDisplayCard from './cards/ExpirationDateDisplayCard';
import { medicationDataDisplayStyles  as medNameStyles } from '../styles/common';
import MedicationOptionsPopup from './cards/MedicationOptionsPopup';




var SoundPlayer = require('react-native-sound');
var sound = null;

let capturedLotNumbers = [];
let capturedExpirationDates = [];
let multipleLotCaptures = 0;
let multipleExpirationCaptures = 0;
let medicationIDValue = 0;


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
                medicationArray : this.state.medicationArray,
                medicationCount : this.state.medicationCount
            }
        })
    }

    addAnotherMedHandler = () => {
      //const {medication} = this.props;
        this.setState({ medicationCount: this.state.medicationCount + 1 })
        console.log("MEDICATION COUNT " + this.state.medicationCount)
        //This will clear the medication object.  The camera does not stop capturing NDC, lot or Expirations.  THis prevents uninteded data captures
        this.props.onLotNumberCapture(1);
        this.setState({ confirmVialPopup : true});
    }

    changePatientHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.PatientCapturePage',
            title: 'Patient Care',
            navigatorStyle: navigatorStyle,
            // These props will be passed to the MedicatioCapturePage.
        })
    }

    state = {
      visiblePopup: false,
      visiblePopup1: false,
      medicationOptionsPopup: false,
      confirmVialPopup: null,
      setState: false
    };

    //This is called when 'Confirm' button is selected on the VialScanPopupConfirmation Window.  Adds the medication object to the array and clear the medication object
    confirmVialScanHandler = () => {
      const { medication } = this.props;      
      //console.log('kevin id: medicationIDValue: ' + medicationIDValue);
      //console.log('kevin id: medicationIDValue Typeof: ' + typeof medicationIDValue);
          
      console.log('kevin id: medID: ' + medication.medID);
      console.log('kevin id: Name: ' + medication.name);

      this.props.onVialConfirmation(medication);
      this.props.onLotNumberCapture(1);
      this.setState({ confirmVialPopup: false});
      this.setState({ medicationOptionsPopup: true });      
      this.props.medicationsArray.medicationsArray.forEach(element => {
        console.log('kevin id: of array medID : ' + element.medID);
        console.log('kevin id: of array Name: ' + element.name);  
      });
      
      };          
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
            patientFirstName: "#FirstName",
            patientLastName: "#LastName",
            patientDOB: "#DOB",
            medicationArray: [
                {
                    medicationName: null,
                    lotNumber : null,
                    expDate : null,
                    //Include an NDC #? concentration? other information?
                } ],
            medicationCount: 0

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
            if (element.type == 'line') {console.log("Kevin: line " + element.value);}

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

        //Once lotNumber is captured this will not run.
        //Sends textBlocks over to LotNumberCapture.js to be parsed for checking if a lot number is found. returns that value.
        //Then that value is sent to the Redux store once this occurs 3 times in a row.
        const { medication } = this.props;

        if (!medication.lotNumber) {
            let result = capturedTextBlocksLot(textBlocks);

            if (result == undefined) { }
            else{             
              if(capturedLotNumbers.includes(result) == true){ multipleLotCaptures++ }
              else { 
                capturedLotNumbers.length = 0; 
                multipleLotCaptures = 0; 
              }
              //This checks to ensure that the data captured isn't undefined, and that the same data has been captured 3 times in a row
              capturedLotNumbers.push(result);
              if (result != undefined && multipleLotCaptures >= 3){
                  this.props.onLotNumberCapture(result);
                  //Empties the Array
                  capturedLotNumbers.length = 0;
                  multipleLotCaptures = 0;
                  //These next lines assign the value for the medID
                  this.props.onSetMedID(medicationIDValue);
                  medicationIDValue++; 
            }
        }
        //Once ExpirationDate is captured this will not run. 
        //Sends textBlocks over to ExpirationDateCapture.js to be parsed for checking if a expirationdate is found. returns that value.
        //Then that value is sent to the Redux store
        if (!medication.expirationDate) {
            let expResult = capturedTextBlocksExpiration(textBlocks);
            if (expResult == undefined) { }
            else {
              if (capturedExpirationDates.includes(expResult) == true) { multipleExpirationCaptures++ }
              else {
                capturedExpirationDates.length = 0;
                multipleExpirationCaptures = 0;
              }
              //Checks that expResult isn't undefined and has been captured the same 3 times in a row
              capturedExpirationDates.push(expResult);
              console.log('kevin: r exp expResult: ' + expResult);
                if (expResult != undefined && multipleExpirationCaptures >= 2) {
                  this.props.onExpirationCapture(expResult);
                  capturedExpirationDates.length = 0;
                  multipleExpirationCaptures = 0;                 
              }
              }
            }//end outter else            
        }
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
              }//end if statement
            for (i in this.globalArray) {
                console.log('TEST: ' + this.globalArray[i].medicationName);
            }
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
                        onBarCodeRead= {!this.state.barCodeRead ? this.onBarCodeRead : null}
                        onTextRecognized={this.onTextRecognized}
                        ref={cam => this.camera = cam}
                        >
                    </RNCamera>
                    {/*
                    Popup dialog for medication list.
                    */}
                    <Icon style={commonStyles.medIcon} name='medkit'
                    onPress={() => {
                      this.setState({ visiblePopup1: true });
                    }}
                    />
                    <Dialog
                      visible={this.state.visiblePopup1}
                      onTouchOutside={() => {
                        this.setState({ visiblePopup1: false });
                      }}
                      dialogTitle={
                        <DialogTitle
                          title="Scanned Medications"
                          style={{
                            backgroundColor: '#e0f2dc',
                          }}
                          hasTitleBar={false}
                          align="left"
                        />
                      }
                      actions={[ <DialogButton text="OK" style={{backgroundColor: '#e0f2dc' }}
                          onPress={() => { this.setState({ visiblePopup1: false }); }}
                          key="button-4" /> ]}
                    >
                    <ScrollView endFillColor='#e0f2dc' centerContent='true'>
                      <DialogContent
                        style={{
                          width:350,
                          backgroundColor: '#e0f2dc',
                        }}
                      >                    
                        {this.props.medicationsArray.medicationsArray.map((med) =>
                        <View  key={med.medID}>
                          <View style={{ flexDirection: 'row' }}>
                              <Text style={medNameStyles.medicationNameTextStyle}>
                                Medication: {med.name}
                              </Text>
                              <Icon type='Ionicons' name='md-reverse-camera' onPress={() => { this.props.onMedicationCapture(undefined); }}/>  
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={medNameStyles.medicationNameTextStyle}>
                              Lot Number: {med.lotNumber}
                            </Text>
                            <Icon type='Ionicons' name='md-reverse-camera' onPress={() => { this.props.onLotNumberCapture(undefined); }}/>  
                          </View>
                          <View style={{ flexDirection: 'row', bottomBorderColor:'black', borderBottomWidth:1}}>
                            <Text style={medNameStyles.medicationNameTextStyle}>
                              Expiration Date: {med.expirationDate}
                            </Text>
                            <Icon type='Ionicons' name='md-reverse-camera' onPress={() => { this.props.onExpirationCapture(undefined) }}/>  
                          </View>
                        </View>
                        )
                        }
                        
                      </DialogContent>
                      </ScrollView>
                    </Dialog>

                     {                   //KN US271-------
                     }
                      {
                      <Dialog
                     visible={((medication.name !== null && medication.lotNumber !== null && medication.expirationDate !== null) && (this.state.confirmVialPopup != false))}
                     dialogTitle={
                        <DialogTitle title="Confirm Vial Information" style={{ backgroundColor: '#e0f2dc' }} hasTitleBar={true}
                          align="left"/>
                      }                
                        actions={[
                        <DialogButton text="Confirm" style={{ backgroundColor: '#e0f2dc' }} key="confirmMedButton"
                        onPress= {this.confirmVialScanHandler  }/>,
                        <DialogButton text="Discard Scan" style={{ backgroundColor: '#e0f2dc' }} key="DiscardScanButton"
                          onPress={ () =>{  this.props.onLotNumberCapture(1);  }} />
                      ]}
                    
                    >
                   <DialogContent style={{width:350, flexDirection:'column'}}>
                    <View>                      
                      <View style={{ flexDirection: 'row' }}>
                          <Text style={medNameStyles.medicationNameTextStyle}>
                            Medication: {medication.name}
                          </Text>
                          <Icon type='Ionicons' name='md-reverse-camera' onPress={() => { this.props.onMedicationCapture(undefined); }}/>  
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                          <Text style={medNameStyles.medicationNameTextStyle}>
                            Lot Number: {medication.lotNumber}
                          </Text>
                          <Icon type='Ionicons' name='md-reverse-camera' onPress={() => { this.props.onLotNumberCapture(undefined); }}/>  
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                          <Text style={medNameStyles.medicationNameTextStyle}>
                            Expiration Date: {medication.expirationDate}
                          </Text>
                          <Icon type='Ionicons' name='md-reverse-camera' onPress={() => { this.props.onExpirationCapture(undefined) }}/>  
                      </View>
                    </View>
                   </DialogContent>
                    </Dialog>
                    }

                    {/* PatientInfoCard contains the Patient Info displayed just below the Camera screen.
                      Located in ..components/cards/PatientInfoCard.js   -1/10/2019 KN */}
                    <PatientInfoCard />
                    <View style={styles.groupTight}>

                        <MedicationNameDisplayCard props={this.props}/>
                        <LotNumberDisplayCard props={this.props}/>
                        <ExpirationDateDisplayCard props={this.props}/>

                    </View>
                </View>
                
                <Text style={commonStyles.linkRed}
                  onPress={() => {
                    this.setState({ medicationOptionsPopup: true });
                  }}
                > Popup Holder</Text>
                <MedicationOptionsPopup
                  visible={this.state.medicationOptionsPopup}
                  onAddAnotherMed={() => {
                    this.addAnotherMedHandler()
                    this.setState({ medicationOptionsPopup: false });
                  }}
                  onViewCart={() => {
                    this.setState({ visiblePopup1: true });
                  }}
                  onFinalize={() => {
                    this.continueHandler()
                    this.setState({ medicationOptionsPopup: false });
                  }}
                  onClose={() => {
                    this.setState({ medicationOptionsPopup: false });
                  }}
                  >
                </MedicationOptionsPopup>

                    <Text style={commonStyles.linkRed}
                      onPress={() => {
                        this.setState({ visiblePopup: true });
                      }}
                    > Change Patient</Text>
                    <Dialog
                      visible={this.state.visiblePopup}
                      onTouchOutside={() => {
                        this.setState({ visiblePopup: false });
                      }}
                      dialogTitle={
                        <DialogTitle
                          title="Change Patient"
                          style={{
                            backgroundColor: '#e0f2dc',
                          }}
                          hasTitleBar={false}
                          align="left"
                        />
                      }
                      actions={[
                        <DialogButton
                          text="OK"
                          style={{
                            backgroundColor: '#e0f2dc',
                          }}
                          onPress={this.changePatientHandler}
                          key="button-2"
                        />,
                        <DialogButton
                          text="Cancel"
                          style={{
                            backgroundColor: '#e0f2dc',
                          }}
                          onPress={() => {
                            this.setState({ visiblePopup: false });
                          }}
                          key="button-3"
                        />
                      ]}
                    >
                      <DialogContent
                        style={{
                          backgroundColor: '#e0f2dc',
                        }}
                      >
                        <Text>You are requesting to go back to the Add Patient page. Any medications currently scanned will not be saved. Select OK to continue to Add Patient page.</Text>
                      </DialogContent>
                    </Dialog>
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


const mapStateToProps = ({ medication, patient, medicationsArray } ) => {
    return {
        medication,
        patient,
        //the acutal Array is accessed through 'this.props.medicationsArray.medicationsArray'
        medicationsArray
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onMedicationCapture: (ndcNumbers) => dispatch(getMedication(ndcNumbers)),
        onLotNumberCapture: (lotNumber) => dispatch (getLotNumber(lotNumber)),
        onExpirationCapture: (expDate) => dispatch (getExpirationDate(expDate)),
        onVialConfirmation: (medication) => dispatch(getMedicationArray(medication)),
        onSetMedID: (medicationIDValue) => dispatch(getMedicationID(medicationIDValue))
        /* Once a Vial Scan is confirmed by user: 
          -'medication' is the medication object that was just scanned and confirmed by user. it has lotNumber, name & expirationDate.
          -medication will be passed to the medicationArray Action to add it to the existing array.
          -a method such as 'onMedicationConfirmed' (when a medication is initially confirmed) should be when onVialConfirmation should be called,
          the 'medication' state should be reset since the MedicationsArray would now contain the recently scanned vial 
        */
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationCapturePage);
