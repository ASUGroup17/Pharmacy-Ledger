
/**
 * Author: Kevin Nolf
 * Start Date: 10/24/18
 * Description: This component will the screen for a user to enter criteria
 *  to search the blockchain
 */

"use Strict";


//Importing different types of components to be used
import React, { Component } from 'react';
import  { Platform, StyleSheet, Link, View} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base';
import {searchLedgerPageStyles as styles} from '../styles/common'

class SearchLedgerPage extends Component {
    //Creating handler to navigate to the Search Results Screen
    searchResultsHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.SearchResultsPage',
            title: 'Search Results'
        })
    }

    //Creating handler to cancel the current search and navigate to the previous screen
    cancelHandler = () => {
        this.props.navigator.pop()
    }

    render () {
        return (
            <Container style={styles.Container}>
                <Content>
                    <View style={styles.content}>
                        <Form>
                            <Item>
                                <Input placeholder = "Physician Name"/>
                            </Item>
                            <Item last>
                                <Input placeholder = "Medication Name"/>
                            </Item>
                        </Form>

                        <Button bordered style = {styles.button} onPress={this.searchResultsHandler}>
                            <Text>
                                Search
                            </Text>
                        </Button>
                        <Button bordered style= {styles.button} onPress={this.cancelHandler}>
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
