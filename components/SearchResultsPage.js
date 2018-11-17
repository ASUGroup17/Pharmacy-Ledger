/**
 * Author: Kevin Nolf
 * Start Date: 10/30/2018
 * Description: Display the results of a Search from the Search Ledger Page
 */

 "use Strict";

 //Importing Components
import React, { Component } from 'react';
import { Platform, StyleSheet, Link, View} from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base';
import {searchResultsPageStyles as styles} from '../styles/common'

class SearchResultsPage extends Component {


    //Creating Handler to Navigate the 'New Search' button, will nagivate to the SearchLedgerPage.js screen
    newSearchHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.SearchLedgerPage',
            title: 'New Search'
        })
    }

     render () {
         return (
             <Container style={styles.Container}>
                <Content>
                    <View style={styles.Container}>
                        <Form>
                            <Item>
                                <Input placeholder = "Administering Physician"/>
                            </Item>
                            <Item>
                                <Input placeholder = "Date Administered"/>
                            </Item>
                            <Item>
                                <Input placeholder = "Medication Name"/>
                            </Item>
                            <Item>
                                <Input placeholder = "Lot #"/>
                            </Item>
                            <Item>
                                <Input placeholder = "Concentration"/>
                            </Item>
                            <Item last>
                                <Input placeholder = "Expiration Date"/>
                            </Item>
                        </Form>

                        <Button bordered style = {styles.button} onPress={this.newSearchHandler} >
                            <Text>
                                New Search
                            </Text>
                        </Button>
                    </View>
                </Content>
             </Container>
         );
     }
 }

 export default SearchResultsPage;
