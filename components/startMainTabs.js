import { Navigation } from 'react-native-navigation'

const startMainTabs = () => {
    Navigation.startTabBasedApp({
    tabs: [
        {
            screen: "pharmacy-ledger.PatientCapturePage",
            label: "Provide Care",
            title: "Provide Care"
        },
        {
            screen: "pharmacy-ledger.SearchLedgerPage",
            label: "Search Ledger",
            title: "Search Ledger"
        }
    ]
}
);
}

export default startMainTabs;
