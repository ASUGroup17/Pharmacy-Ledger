import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Text } from 'native-base';
import { commonStyles } from '../../styles/common';

//const SearchResultsCard = ( { searchResult } ) => {
const SearchResultsCard = ( props ) => {

        return (
            <View>
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Physician Name: {props.searchResult.physicianName}{"\n"}
                        Medication Name: {props.searchResult.medicationName}{"\n"}
                        Lot Number: {props.searchResult.lotNumber}{"\n"}
                        Patient ID: {props.searchResult.patientID}{"\n"}
                        Start Date: {props.searchResult.startDate}{"\n"}
                        End Date: {props.searchResult.endDate}{"\n"}
                    </Text>
                </CardItem >
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
