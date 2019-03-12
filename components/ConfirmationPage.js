import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Container, Content, Card, Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'

import { getMedication } from '../store/actions/MedicationActions';
import { getLotNumber } from '../store/actions/LotNumberActions';
import { getExpirationDate } from '../store/actions/ExpirationDateActions';
import { getMedicationArray } from '../store/actions/MedicationArrayActions';
import { getMedicationID } from '../store/actions/MedicationIDActions';
import { confirmationPageStyles as styles, commonStyles } from '../styles/common'
import { medicationDataDisplayStyles  as medNameStyles } from '../styles/common';
import  PatientInfoCard  from './cards/PatientInfoCard';
import { removeMedicationArrayItem } from '../store/actions/RemoveArrayItemActions';

class ConfirmationPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
        }
    }  

  render () {
    return (
      <Container style={commonStyles.container}>
        <Content contentContainerStyle={{ justifyContent: 'center' }} style={commonStyles.content}>
          <View>
          <Card>
            <PatientInfoCard />
          <ScrollView endFillColor='#e0f2dc' centerContent='true'>                                                    
                        {this.props.medicationsArray.medicationsArray.map((med) =>                         
                        <View  key={med.medID} style={{bottomBorderColor:'black', borderBottomWidth:1}}>
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
                            <Text style={{fontWeight:'bold', color: 'red'}} onPress= {this.props.onRemoveItem.bind(null, med.medID)}>
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

const mapDispatchToProps = (dispatch) => {
  return {
      onMedicationCapture: (ndcNumbers) => dispatch(getMedication(ndcNumbers)),
      onLotNumberCapture: (lotNumber) => dispatch (getLotNumber(lotNumber)),
      onExpirationCapture: (expDate) => dispatch (getExpirationDate(expDate)),
      onVialConfirmation: (medication) => dispatch(getMedicationArray(medication)),
      onSetMedID: (medicationIDValue) => dispatch(getMedicationID(medicationIDValue)),
      onRemoveItem: (medication) => dispatch(removeMedicationArrayItem(medication))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);