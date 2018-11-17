import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Content, Card, Body, Button, Text, Form, Item, Input, CardItem } from 'native-base'
import {confirmationPageStyles as styles} from '../styles/common'

class ConfirmationPage extends Component {
    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{justifyContent: "center"}} style={styles.contentStyle}>
                    <View>
                        <Text style={styles.viewStyle}>Confirm Details to add to Ledger.</Text>
                        <View style={styles.viewStyle}>
                        <Text>
                            Patient ID:
                        </Text>
                        <Input placeholder="Patient ID" />
                        </View>
                        <Card>
                            <CardItem header style={styles.cardHeaderStyle}>
                                <Text>
                                    Medication Name Here!!!
                                </Text>
                                <Button transparent danger>
                                    <Text>Delete</Text>
                                </Button>
                            </CardItem>
                            <CardItem style={styles.cardBodyStyle}>
                                <Body>
                                    <Text>
                                        Lot Number and Expiration Here!!!
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
