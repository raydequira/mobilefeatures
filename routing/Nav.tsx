import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import StackNav from './StackNav'
import DrawerNav from './DrawerNav'
import TabNav from './TabNav'

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: StackNav
  },
  About: {
    screen: DrawerNav
  },
  Tabs: {
    screen: TabNav
  }

})

export  default createAppContainer(DrawerNavigator);
