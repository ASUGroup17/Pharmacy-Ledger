import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Container, Content, Card, Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'

import { confirmationPageStyles as styles, commonStyles } from '../styles/common'
import { medicationDataDisplayStyles  as medNameStyles } from '../styles/common';
import  PatientInfoCard  from './cards/PatientInfoCard';

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
        }
    }

    deleteMedicationHandler = () => {
      
    }
  

  render () {
    return (
      <Container style={commonStyles.container}>
        <Content contentContainerStyle={{ justifyContent: 'center' }} style={commonStyles.content}>
          <View>
          <Card>
            <PatientInfoCard />
             {/* <CardItem header style={styles.cardHeaderStyle}>
                <Text>
                  {this.props.medication.name}
                </Text>
                <Button transparent danger>
                  <Text>Delete</Text>
                </Button>
              </CardItem>
              <CardItem style={styles.cardBodyStyle}>
                <Body>
                  <Text style={commonStyles.text}>
                    Lot Number and Expiration Here!!! {this.props.lotNumber}
                  </Text>
                </Body>
          </CardItem>*/}
          <ScrollView endFillColor='#e0f2dc' centerContent='true'>                                          
                        {this.props.medicationsArray.medicationsArray.map((med) =>
                        <View  key={med.id} style={{bottomBorderColor:'black', borderBottomWidth:1}}>
                          <View style={{ flexDirection: 'row' }}>
                              <Text style={medNameStyles.medicationNameTextStyle}>
                                Medication: {med.name}
                              </Text>
                              <Icon name='camera' onPress={() => { this.props.onMedicationCapture(undefined); }}/>  
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={medNameStyles.medicationNameTextStyle}>
                              Lot Number: {med.lotNumber}
                            </Text>
                            <Icon name='camera' onPress={() => { this.props.onLotNumberCapture(undefined); }}/>  
                          </View>
                          <View style={{ flexDirection: 'row'}}>
                            <Text style={medNameStyles.medicationNameTextStyle}>
                              Expiration Date: {med.expirationDate}
                            </Text>
                            <Icon name='camera' onPress={() => { this.props.onExpirationCapture(undefined) }}/>  
                          </View>
                          <View style={{ alignSelf: 'flex-end', padding: 2 }}>
                            <Text style={{fontWeight:'bold', color: 'red'}}>
                              Delete Medication
                            </Text>                          
                          </View>
                        </View>
                        )
                        }                   
                      </ScrollView>
            </Card>
          </View>
          <View style={styles.buttonRowStyle}>
            <Button bordered primary style={commonStyles.button}>
              <Text>
                Continue
              </Text>
            </Button>
            <Button bordered danger style={commonStyles.button}>
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

const mapStateToProps = ({ medication, patient, medicationsArray }) => {
  return {
      medication,
      patient,
      medicationsArray
  }
}

export default connect(mapStateToProps)(ConfirmationPage);

                      // <ScrollView endFillColor='#e0f2dc' centerContent='true'>                                          
                      //   {this.props.medicationsArray.medicationsArray.map((med) =>
                      //   <View  key={med.ndc}>
                      //     <View style={{ flexDirection: 'row' }}>
                      //         <Text style={medNameStyles.medicationNameTextStyle}>
                      //           Medication: {med.name}
                      //         </Text>
                      //         <Icon name='camera' onPress={() => { this.props.onMedicationCapture(undefined); }}/>  
                      //     </View>
                      //     <View style={{ flexDirection: 'row' }}>
                      //       <Text style={medNameStyles.medicationNameTextStyle}>
                      //         Lot Number: {med.lotNumber}
                      //       </Text>
                      //       <Icon name='camera' onPress={() => { this.props.onLotNumberCapture(undefined); }}/>  
                      //     </View>
                      //     <View style={{ flexDirection: 'row', bottomBorderColor:'black', borderBottomWidth:1}}>
                      //       <Text style={medNameStyles.medicationNameTextStyle}>
                      //         Expiration Date: {med.expirationDate}
                      //       </Text>
                      //       <Icon name='camera' onPress={() => { this.props.onExpirationCapture(undefined) }}/>  
                      //     </View>
                      //   </View>
                      //   )
                      //   }                   
                      // </ScrollView>