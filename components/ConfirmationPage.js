import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, Body, Button, Text, Form, Item, Input, CardItem } from 'native-base'
import { confirmationPageStyles as styles, commonStyles } from '../styles/common'

class ConfirmationPage extends Component {
<<<<<<< HEAD
  /* This Constructor was not originally here.  We used this to get props from the PatientCapturePage that use
        Navigator.push to give that data/props to MedicationCapturePage; MedCapturePage pushes this ConfirmationPage
        and the props from both the previous pages can be used here.  This page currently doesn't send data along anywhere else,
        but it is capable of displaying information from the preivous two pages.
        --NOTE: currently medications are a singular object, we will likely be changing this to an array
    */
    constructor(props) {
        super(props);
        this.state = {
            //From MedicationCapturePage
            //Medications will likely have to be an array; this is mostly for building and testing purposes
            ndc: this.props.ndc,
            medicationName: this.props.medicationName,
            lotNumber: this.props.lotNumber,
            expDate: this.props.expDate,
            //From PatientCapturePage
            patientID: this.props.patientID,
            patientFirstName: this.props.patientFirstName, 
            patientLastName: this.props.patientLastName,
            patientDOB: this.props.patientDOB
        }

=======
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
      medicationUpc: this.props.medicationUpc,
      medicationName: this.props.medicationName,
      lotNumber: this.props.lotNumber,
      expDate: this.props.expDate,
      // From PatientCapturePage
      qrCode: this.props.qrCode,
      patientFirstName: this.props.patientFirstName,
      patientLastName: this.props.patientLastName,
      patientDOB: this.props.patientDOB
>>>>>>> 93d06975fd2e2ed079ae16817b68a74efac08dd0
    }
  }

  render () {
    return (
      <Container style={commonStyles.container}>
        <Content contentContainerStyle={{ justifyContent: 'center' }} style={commonStyles.content}>
          <View>
            <Text style={styles.viewStyle}>Confirm Details to add to Ledger.</Text>
            <View style={styles.viewStyle}>
              <Text>
                Patient ID: {this.props.qrCode}
              </Text>
              <Input placeholder='Patient ID' />
            </View>
            <Card>
              <CardItem header style={styles.cardHeaderStyle}>
                <Text>
                  Medication Name Here!!! {this.props.medicationName}
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
export default ConfirmationPage;
