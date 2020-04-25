import React, { useState } from 'react'
import { Text, View, StyleSheet, Linking  } from 'react-native';

export default function About() {
   return (
     <View style={styles.container}>
      <Text>This is a sample about page please visit my github for more sample project</Text>
      <Text style={styles.link} onPress={ () => Linking.openURL('https://github.com/raydequira') }>https://github.com/raydequira</Text>
     </View>
   )
}
export default About

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 20,
      alignItems: 'center'
   },
   link: {
     color: 'red'
   }
})
