import { Navigation } from 'react-native-navigation'
import { Icon } from 'react-native-vector-icons/Ionicons'
import { navigatorStyle, tabBarStyle } from '../styles/common'

const startMainTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'pharmacy-ledger.PatientCapturePage',
        label: 'Provide Care',
        title: 'Provide Care',
        icon: require('../icons/if_icon-person-add_211872.png'),
        navigatorStyle: navigatorStyle
      },
      {
        screen: 'pharmacy-ledger.SearchLedgerPage',
        label: 'Search Ledger',
        title: 'Search Ledger',
        icon: require('../icons/if_11_Search_106236.png'),
        navigatorStyle: navigatorStyle
      }
    ],
    appStyle: tabBarStyle
  })
}
export default startMainTabs
