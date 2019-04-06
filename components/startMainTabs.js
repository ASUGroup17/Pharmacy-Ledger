import { Navigation } from 'react-native-navigation'
import { Icon } from 'react-native-vector-icons/Ionicons'
import { navigatorStyle, tabBarStyle } from '../styles/common'

const startMainTabs = () => {
  /*
  //added for 114
  Promise.all([
    //Icon.getImageSource("../icons/if_icon-person-add_211872.png"),
    //Icon.getImageSource("../icons/if_11_Search_106236.png")
    Icon.getImageSource("person-add", 30),
    Icon.getImageSource("md-map", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'pharmacy-ledger.PatientCapturePage',
          label: 'Provide Care',
          title: 'Provide Care',
          icon: sources[0]
          //icon: require('../icons/if_icon-person-add_211872.png')
        },
        {
          screen: 'pharmacy-ledger.SearchLedgerPage',
          label: 'Search Ledger',
          title: 'Search Ledger',
          icon: sources[1]
          //icon: require('../icons/if_11_Search_106236.png')
        }
      ]
    })
  });
*/

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'pharmacy-ledger.PatientCapturePage',
        label: 'Patient',
        title: 'Patient',//title: 'Provide Care',
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
