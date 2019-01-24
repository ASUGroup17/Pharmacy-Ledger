import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Text } from 'native-base';
import { commonStyles } from '../../styles/common';

// const SearchResultsCard = ( { searchResult } ) => {
const SearchResultsCard = (  ) => {

        return (
            <View>
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                    </Text>
                </CardItem >
                <CardItem style = {commonStyles.patientInfoStyle}>
                    <Text style={commonStyles.patientTextStyle}>
                        Name:
                    </Text>
                </CardItem>
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
