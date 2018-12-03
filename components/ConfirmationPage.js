import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, Body, Button, Text, Form, Item, Input, Right, CardItem } from 'native-base'
import { connect } from 'react-redux'
import { confirmationPageStyles as styles, commonStyles } from '../styles/common'

class ConfirmationPage extends Component {
  /*
      This Constructor was not originally here.
      We used this to get props from the PatientCapturePage that use
      Navigator.push to give that data/props to MedicationCapturePage;
      MedCapturePage pushes this ConfirmationPage
      and the props from both the previous pages can be used here.
      This page currently doesn't send data along anywhere else,
      but it is capable of displaying information from the preivous two pages.
      --NOTE: currently medications are a singular object,
      we will likely be changing this to an array
  */
  constructor (props) {
    super(props)
    this.state = {
      /*
            From MedicationCapturePage.
            Medications will likely have to be an array;
            this is mostly for building and testing purposes.
            */
           /*Commenting out the individual medication related items. Implementing an array here due to array state issues,
           of creating the array in MedicationCapturePage.  This is for Testing & creating a proper display of multiple medications
           from an array. 
            ndc: this.props.ndc,
            medicationName: this.props.medicationName,
            lotNumber: this.props.lotNumber,
            expDate: this.props.expDate,
            */
          //Fake array used to display an array of Medications dynamically
          medicationArray : [
            { ndc : 1110111, medicationName: "FakeMed1", lotNumber : 123, expDate : '12/2018' }, 
            { ndc : 4454124, medicationName: "FakeMed2", lotNumber : 456, expDate : '3/2020' },
            { ndc : 7777799, medicationName: "FakeLongMed3                 -------------   -------", lotNumber : 741, expDate : '1/2019' },
            { ndc : 1234567, medicationName: "FakeMed4", lotNumber : 1289, expDate : '5/2020' },
            { ndc : 7654321, medicationName: "FakeMed5", lotNumber : 8672, expDate : '12/2021' },
          ],


            //From PatientCapturePage
            patientID: this.props.patient.id,
            patientFirstName: this.props.patientFirstName, 
            patientLastName: this.props.patientLastName,
            patientDOB: this.props.patientDOB
        }
    }
  

  render () {
    return (
      <Container style={commonStyles.container}>
        <Content contentContainerStyle={{ justifyContent: 'center' }} style={commonStyles.content}>
          <View>
            {/*
            -One card contains a series of Card Items to be displayed in this View.  
            -Specific Text Color styling wasn't working through CSS file common.js, so in-line
            styling was used; not ideal, perhaps this can be fixed
            */} 
          <Card>  
            <CardItem style = {styles.patientInfoStyle}>
              <Text style= { { color : 'white' } }>
                Patient ID:{this.props.patient.id}  DOB:{this.props.patientDOB}
              </Text>
              </CardItem >
              <CardItem style = {styles.patientInfoStyle}>
              <Text style = { { color: 'white' } }>
                Name: {this.props.patientLastName} {this.props.patientFirstName} 
                </Text>
            </CardItem>  
            {/*Here we create a portion of the screen, to dynically create new Cards for each Medication with its information displayed
            This starts and ends with a 'Content' tag */}  
            <Content>
            {this.state.medicationArray.map( (med, index) => {
              return (
              <Card key={ index }>
                <CardItem header style={styles.cardHeaderStyle}>
                  <Text>
                    {med.medicationName}
                  </Text>
                </CardItem>
                <CardItem style={styles.cardBodyStyle}>
                  <Text>
                    Lot:{med.lotNumber}   Exp:{med.expDate}
                  </Text>
                  <Right>
                    <Button transparent danger>
                      <Text>
                        Delete
                      </Text>
                    </Button>
                  </Right>
                </CardItem>
                </Card>
              );
            })}
            </Content>
          { /*Previous Medication Display Cards used -------------------------        
              <CardItem header style={styles.cardHeaderStyle}>
                <Text>
                  {this.props.medication.name}
                </Text>
                <Button transparent danger>
                  <Text>Delete</Text>
                </Button>
              </CardItem>
              <CardItem style={styles.cardBodyStyle}>
                <Body>
                  <Text>
                    Lot Number and Expiration Here!!! {this.props.lotNumber}
                  </Text>
                </Body>
              </CardItem>
          */}
            </Card>
          </View>
          <View style={styles.buttonRowStyle}>
            <Button bordered primary style={styles.buttonStyle}>
              <Text>
                Continue
              </Text>
            </Button>
            <Button bordered danger style={styles.buttonStyle}>
              <Text>
                Cancel
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ medication, patient }) => {
  return {
      medication,
      patient
  }
}

export default connect(mapStateToProps)(ConfirmationPage);
