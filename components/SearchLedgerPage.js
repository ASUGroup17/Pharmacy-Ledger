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
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base';

class SearchLedgerPage extends Component {
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

export default SearchLedgerPage;

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
