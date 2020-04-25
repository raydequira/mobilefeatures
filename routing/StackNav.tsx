import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../pages/Home'
import Sample from '../pages/Sample'
import Header from '../component/header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      }
    }
  },
  Features: {
    screen: Sample,
    navigationOptions: {
      title: 'React Feature',
    }
  }
}

const StackNav = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#999' },
    headerTitleStyle: { color: '#fff' }
  }
});

export default StackNav;
