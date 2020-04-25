import { createStackNavigator } from 'react-navigation-stack'

import About from '../pages/About'

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About this App'
    }
  }
}

const DrawerNav = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#999' },
    headerTitleStyle: { color: '#fff' }
  }
});

export default DrawerNav;
