import React from 'react';
import { StyleSheet, Text, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation}){
  const openSideMenu = () => {
    alert('You have open Side Menu');
    navigation.openDrawer()
  }
  return (
    <View style={styles.wrapper} >
     <MaterialIcons name='menu' onPress={openSideMenu} />
      <View>
        <Text style={styles.headerText}> Rayroland Mobile Example</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff'
  }
})
