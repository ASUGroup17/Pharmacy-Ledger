import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base'

class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Add Medication'
        })
    }
    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={styles.contentStyle}>
                    <Text>
                        Scan Patient's Wristband
                    </Text>
                    <Button bordered style={styles.buttonStyle}>
                        <Text>
                            Capture Image
                        </Text>
                    </Button>
                    <View style={styles.patientIdView}>
                        <Text>
                            Patient ID:
                        </Text>
                        <Input placeholder="Patient ID" />
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
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    patientIdView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 50
    },
    buttonStyle: {
        alignSelf: 'center'
    }


})

export default PatientCapturePage;
