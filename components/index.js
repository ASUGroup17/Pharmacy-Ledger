import React from 'react';
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
const store = configureStore()

import LoginPage from './LoginPage'
import PatientCapturePage from './PatientCapturePage'
import SearchLedgerPage from './SearchLedgerPage'
import MedicationCapturePage from './MedicationCapturePage'
import ConfirmationPage from './ConfirmationPage'
import SearchResultsPage from './SearchResultsPage'

export function registerComponents() {
  Navigation.registerComponent('pharmacy-ledger.LoginPage', () => LoginPage)
  //Navigation.registerComponent('pharmacy-ledger.PatientCapturePage', () => PatientCapturePage, store, Provider)
  Navigation.registerComponent('pharmacy-ledger.PatientCapturePage', () => (props) => (
    <Provider store={store}> 
      <PatientCapturePage {...props}/>
    </Provider>
    ), () => PatientCapturePage);
  
  
  Navigation.registerComponent('pharmacy-ledger.SearchLedgerPage', () => SearchLedgerPage)

  Navigation.registerComponent('pharmacy-ledger.MedicationCapturePage', () => (props) => (
    <Provider store={store}> 
      <MedicationCapturePage {...props}/>
    </Provider>
    ), () => MedicationCapturePage);
/*
  Navigation.registerComponent('navigation.playground.ReduxScreen', () => (props) => (
    <Provider store={reduxStore}>
      <ReduxScreen {...props} />
    </Provider>
  ), () => ReduxScreen);*/
  Navigation.registerComponent('pharmacy-ledger.ConfirmationPage', () => ConfirmationPage, store, Provider)
  Navigation.registerComponent('pharmacy-ledger.SearchResultsPage', () => SearchResultsPage)
}
