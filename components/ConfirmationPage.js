import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, Body, Button, Text, Form, Item, Input, CardItem } from 'native-base'


class ConfirmationPage extends Component {


    /*This Constructor was not originally here.  We used this to get props from the PatientCapturePage that use
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
            medicationUpc: this.props.medicationUpc,
            medicationName: this.props.medicationName,
            lotNumber: this.props.lotNumber,
            expDate: this.props.expDate,
            //From PatientCapturePage
            qrCode: this.props.qrCode,
            patientFirstName: this.props.patientFirstName, 
            patientLastName: this.props.patientLastName,
            patientDOB: this.props.patientDOB
        }
    }





    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{justifyContent: "center"}} style={styles.contentStyle}>
                    <View>
                        <Text style={styles.viewStyle}>Confirm Details to add to Ledger.</Text>
                        <View style={styles.viewStyle}>
                        <Text>
                            Patient ID: {this.props.qrCode} 
                        </Text>
                        <Input placeholder="Patient ID" />
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


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    contentStyle: {
        flex: 1,
        flexGrow: 1,
    },
    viewStyle: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 50,
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
    },
    cardHeaderStyle: {
        backgroundColor: 'lightgray'
    },
    cardBodyStyle: {
        backgroundColor: 'gainsboro'
    },
    buttonRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-end'
    }
})
export default ConfirmationPage;