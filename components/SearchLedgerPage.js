
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


/**
 * These two lines were meant to help implement some navigation from the SearchLedgerPage to the SearchResultsPage.
 * The SearchLedgerPage is not registered, and it's causing errors when the Submit button is selected
 * 
 */
//import { Navigation } from 'react-native-navigation';
//Navigation.registerComponent('components.SearchResultsPage', () => SearchResultsPage);


class SearchLedgerPage extends Component {
    //Creating handler to navigate to the Search Results Screen
    /*searchResultsHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.SearchResultsPage',
            title: 'Search Results'
        })


         onPress={this.searchResultsHandler}>
    }*/

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

                        <Button bordered style = {styles.button}>
                            <Text>
                                Search
                            </Text>
                        </Button>
                        <Button bordered style= {styles.button}>
                            <Text>
                                Cancel
                            </Text></Button>
                    
                    </View>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'space-between',
    },

    content: {
        alignContent: 'space-around',
        justifyContent: 'space-around'
    },

    buttton: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        marginBottom: 100,
        marginTop: 50
    },

    text: {
        alignContent: 'center',
        padding: 2
    },

    link: {
        alignSelf: 'center',
        color: '#0000ff',
        padding: 2
    }
});

export default SearchLedgerPage;

