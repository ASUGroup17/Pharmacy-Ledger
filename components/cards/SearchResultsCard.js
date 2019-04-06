import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Text, Card, Body } from 'native-base';
import { commonStyles } from '../../styles/common';

//const SearchResultsCard = ( { searchResult } ) => {
const SearchResultsCard = ( props ) => {

        return (
            <View>
                <Card>
                <CardItem header bordered>
                    <Body>
                        <Text>
                            Patient ID: {props.searchResult.patientID}{"\t"}
                            DOS: {props.searchResult.startDate}{"\n"}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem bordered style = {commonStyles.patientInfoStyle}>
                    <Body>
                        <Text style={commonStyles.patientTextStyle}>
                            Medication Name: {props.searchResult.medicationName}{"\n"}
                            Physician Name: {props.searchResult.physicianName}{"\n"}
                        </Text>
                    </Body>
                </CardItem >
                <CardItem footer bordered>
                    <Body>
                        <Text>
                        Lot Number: {props.searchResult.lotNumber}{"\t"}
                        Exp Date: {props.searchResult.expirationDate}{"\t"}
                        </Text>
                    </Body>
                </CardItem>
                </Card>
            </View>
        );
}

// const mapStateToProps = (state) => {
//     console.log("TEST PATIENTINFOCARD state.patient: " + state.searchResult);
//     return {
//         searchResult : state.searchResult
//     };
// };
//
// export default connect (mapStateToProps) (SearchResultsCard);
export default SearchResultsCard;
