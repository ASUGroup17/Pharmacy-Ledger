/**
 * Author: Kevin Nolf
 * Start Date: 10/24/18
 * Description: This component will the screen for a user to enter criteria
 * to search the blockchain
 */

"use Strict";
// Importing different types of components to be used.
import React, { Component } from 'react';
import  { Platform, StyleSheet, Link, View} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Row } from 'native-base';
import { searchLedgerPageStyles as styles, commonStyles, navigatorStyle } from '../styles/common'

class SearchLedgerPage extends Component {
    // Creating handler to navigate to the Search Results Screen.
    searchResultsHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.SearchResultsPage',
            title: 'Search Results',
            navigatorStyle: navigatorStyle,

            /*
              Passing these props to the next Screen (SearchResultsPage)
              that will be pushed to the Navigator Stack.
            */
            passProps: {
                physicianName: this.state.physicianName,
                medicationName: this.state.medicationName,
                lotNumber: this.state.lotNumber,
                patientID: this.state.patientID,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                searchResultsArray : this.state.searchResultsArray
            }
        })
    }

    // Creating handler to cancel the current search and navigate to the previous screen.
    cancelHandler = () => {
        this.props.navigator.pop()
    }

    constructor(props) {
        super(props);
        this.state = {
          physicianName: null,
          medicationName: null,
          lotNumber: null,
          patientID: null,
          startDate: null,
          endDate: null,
          searchResultsArray: [
              {
                physicianName: null,
                medicationName: null,
                lotNumber: null,
                patientID: null,
                startDate: null,
                endDate: null
              } ]
        }

    }

    render () {
        return (
            <Container style={commonStyles.container}>
                <Content>
                    <View style={commonStyles.content}>
                        <Form>
                            <Item>
                                <Input placeholder = "Physician Name" editable = {true} value={this.state.physicianName}
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                            <Item last>
                                <Input placeholder = "Medication Name" editable = {true} value={this.state.medicationName}
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                            <Item last>
                                <Input placeholder = "Lot Number" editable = {true} value={this.state.lotNumber}
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                            <Item last>
                                <Input placeholder = "Patient ID" editable = {true} value={this.state.patientID}
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                            <Item last>
                                <Input placeholder = "Start Date" editable = {true} value={this.state.startDate}
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                            <Item last>
                                <Input placeholder = "End Date" editable = {false} value={this.state.endDate}
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                        </Form>
                        <Row>
                            <Button iconLeft style={{ ...commonStyles.button, flex: 1, margin: 4 }} onPress={this.searchResultsHandler}>
                                <Text>
                                    Search
                                </Text>
                            </Button>
                            <Button iconRight style={{ ...commonStyles.cancelButton, flex: 1, margin: 4 }} onPress={this.cancelHandler}>
                                <Text>
                                    Cancel
                                </Text>
                            </Button>

                        </Row>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default SearchLedgerPage;
