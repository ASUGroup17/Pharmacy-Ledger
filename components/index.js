import { Navigation } from 'react-native-navigation'
import LoginPage from './LoginPage'
import PatientCapturePage from './PatientCapturePage'
import SearchLedgerPage from './SearchLedgerPage'
import MedicationCapturePage from './MedicationCapturePage'
import ConfirmationPage from './ConfirmationPage'
import SearchResultsPage from './SearchResultsPage'

export function registerComponents() {
  Navigation.registerComponent('pharmacy-ledger.LoginPage', () => LoginPage)
  Navigation.registerComponent('pharmacy-ledger.PatientCapturePage', () => PatientCapturePage)
  Navigation.registerComponent('pharmacy-ledger.SearchLedgerPage', () => SearchLedgerPage)
  Navigation.registerComponent('pharmacy-ledger.MedicationCapturePage', () => MedicationCapturePage)
  Navigation.registerComponent('pharmacy-ledger.ConfirmationPage', () => ConfirmationPage)
  Navigation.registerComponent('pharmacy-ledger.SearchResultsPage', () => SearchResultsPage)
}
