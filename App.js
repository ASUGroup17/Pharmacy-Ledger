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

//Register Screens
Navigation.registerComponent("pharmacy-ledger.LoginPage", () => LoginPage);

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

