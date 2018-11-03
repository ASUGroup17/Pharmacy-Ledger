/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import LoginPage from './components/LoginPage';
import { Navigation } from 'react-native-navigation';
import PatientCapturePage from './components/PatientCapturePage';
import SearchLedgerPage from './components/SearchLedgerPage';
import MedicationCapturePage from './components/MedicationCapturePage';
import ConfirmationPage from './components/ConfirmationPage';
import SearchResultsPage from './components/SearchResultsPage';

//Register Screens
Navigation.registerComponent("pharmacy-ledger.LoginPage", () => LoginPage);
Navigation.registerComponent("pharmacy-ledger.PatientCapturePage", () => PatientCapturePage);
Navigation.registerComponent("pharmacy-ledger.SearchLedgerPage", () => SearchLedgerPage);
Navigation.registerComponent("pharmacy-ledger.MedicationCapturePage", () => MedicationCapturePage);
Navigation.registerComponent("pharmacy-ledger.ConfirmationPage", () => ConfirmationPage);
Navigation.registerComponent("pharmacy-ledger.SearchResultsPage", () => SearchResultsPage);


//Start App
Navigation.startSingleScreenApp( {
  screen: {
    screen: "pharmacy-ledger.LoginPage",
    title: "Pharmacy Ledger Login"
  }
});

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//         <LoginPage />
//     );
//   }
// }

