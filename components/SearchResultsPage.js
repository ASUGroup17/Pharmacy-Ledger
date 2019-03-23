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

    constructor (props) {
      super(props)
      this.state = {
            //Fake array used to display an array
            searchResults : [
              { physicianName: "Bobby Bug", medicationName: "FakeMed1", lotNumber: 123, patientID: '1234', startDate: '07/2018', endDate: '08/2018' },
              { physicianName: "Jane Fluff", medicationName: "FakeMed2", lotNumber: 123, patientID: '5678', startDate: '09/2018', endDate: '10/2018' },
              { physicianName: "Frankie Joe", medicationName: "FakeMed3", lotNumber: 123, patientID: '9876', startDate: '11/2018', endDate: '12/2018' }
            ]
          }
      }

     render () {
         return (
             <Container style={commonStyles.container}>
                <Content>
                    <View style={commonStyles.container}>
                      {this.state.searchResults.map((searchResult) =>
                        <SearchResultsCard searchResult={searchResult} />
                      )}
                        <Button style = {commonStyles.button} onPress={this.newSearchHandler} >
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
