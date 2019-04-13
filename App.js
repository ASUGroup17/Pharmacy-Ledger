/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
// added us115 11/24 -cal
import SplashScreen from 'react-native-splash-screen'
import { registerComponents } from './components'
import { navigatorStyle } from './styles/common'


// if you want to add redux to a page
// Navigation.registerComponent(
//   "pharmacy-ledger.PatientCapturePage",
//   () => PatientCapturePage,
//   store,
//   Provider
// );

registerComponents()

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'pharmacy-ledger.LoginPage',
    title: 'Pharmacy Ledger',
    navigatorStyle: navigatorStyle
  }
})

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//         <LoginPage />
//     );
//   }
// }

// Added us115 11/24 -cal
export default class App extends Component {
  componentDidMount () {
    SplashScreen.hide()
  }
}
