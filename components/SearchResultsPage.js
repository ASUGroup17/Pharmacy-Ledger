/**
 * Author: Kevin Nolf
 * Start Date: 10/30/2018
 * Description: Display the results of a Search from the Search Ledger Page.
 */

 "use Strict";
 // Importing Components
import React, { Component } from 'react';
import { Platform, StyleSheet, Link, View} from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base';
import { searchResultsPageStyles as styles, commonStyles, navigatorStyle } from '../styles/common'
import SearchResultsCard from './cards/SearchResultsCard';

class SearchResultsPage extends Component {

    /*
      Creating Handler to Navigate the 'New Search' button,
      will nagivate to the SearchLedgerPage.js screen
    */
    newSearchHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.SearchLedgerPage',
            title: 'New Search',
            navigatorStyle: navigatorStyle
        })
    }

     render () {
         return (
             <Container style={commonStyles.container}>
                <Content>
                    <View style={commonStyles.container}>
                      <SearchResultsCard />
                        <Button bordered style = {commonStyles.button} onPress={this.newSearchHandler} >
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


   /**<Form>
       <Item>
           <Input placeholder = "Administering Physician"
             placeholderTextColor={commonStyles.text.color} />
       </Item>
       <Item>
           <Input placeholder = "Date Administered"
             placeholderTextColor={commonStyles.text.color} />
       </Item>
       <Item>
           <Input placeholder = "Medication Name"
             placeholderTextColor={commonStyles.text.color} />
       </Item>
       <Item>
           <Input placeholder = "Lot #"
             placeholderTextColor={commonStyles.text.color} />
       </Item>
       <Item>
           <Input placeholder = "Concentration"
             placeholderTextColor={commonStyles.text.color} />
       </Item>
       <Item last>
           <Input placeholder = "Expiration Date"
             placeholderTextColor={commonStyles.text.color} />
       </Item>
   </Form>*/

 // const mapStateToProps = ({ searchResult }) => {
 //     return {
 //         searchResult
 //     }
 // }
 //
 // export default connect (mapStateToProps) (SearchResultsPage);

export default SearchResultsPage;
