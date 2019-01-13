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
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base';
import { searchLedgerPageStyles as styles, commonStyles, navigatorStyle } from '../styles/common'

class SearchLedgerPage extends Component {
    // Creating handler to navigate to the Search Results Screen.
    searchResultsHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.SearchResultsPage',
            title: 'Search Results',
            navigatorStyle: navigatorStyle
        })
    }

    // Creating handler to cancel the current search and navigate to the previous screen.
    cancelHandler = () => {
        this.props.navigator.pop()
    }

    render () {
        return (
            <Container style={commonStyles.container}>
                <Content>
                    <View style={commonStyles.content}>
                        <Form>
                            <Item>
                                <Input placeholder = "Physician Name"
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                            <Item last>
                                <Input placeholder = "Medication Name"
                                  placeholderTextColor={commonStyles.text.color} />
                            </Item>
                        </Form>
                        <Button bordered style = {commonStyles.button} onPress={this.searchResultsHandler}>
                            <Text>
                                Search
                            </Text>
                        </Button>
                        <Button bordered style= {commonStyles.button} onPress={this.cancelHandler}>
                            <Text>
                                Cancel
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default SearchLedgerPage;
