import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base'

class PatientCapturePage extends Component {
    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content>
                <View style={styles.contentStyle}>
                    <Text>
                        Scan Patient's Wristband
                    </Text>
                    <Button bordered>
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
                    <Button bordered>
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
        justifyContent: 'space-between'
    },
    contentStyle: {
        //flexDirection: 'column',
        //flex: 1,
        //alignContent: 'center',
        //justifyContent: 'space-around'
    },
    patientIdView: {
        flexDirection: 'row'
    }


})

export default PatientCapturePage;
