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
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import PatientCapturePage from './components/PatientCapturePage';
import SearchLedgerPage from './components/SearchLedgerPage';
import MedicationCapturePage from './components/MedicationCapturePage';
import ConfirmationPage from './components/ConfirmationPage';
import SearchResultsPage from './components/SearchResultsPage';
//added us115 11/24 -cal
import SplashScreen from 'react-native-splash-screen';

const store = configureStore()

// if you want to add redux to a page 
// Navigation.registerComponent(
//   "pharmacy-ledger.PatientCapturePage", 
//   () => PatientCapturePage,
//   store,
//   Provider
// );

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


//Added us115 11/24 -cal
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
}
