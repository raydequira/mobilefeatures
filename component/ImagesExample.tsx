import React, { Component } from 'react'
import { Image, StyleSheet, Dimensions,View, Text } from 'react-native'

class ImagesExample extends Component {

   render(){
    return(
        <View style={styles.wrapper}>
          <Text>This is sample Image in React</Text>
          <Image source = {require('../logo.png')} style = {styles.item} />
        </View>

       )
   }
}
export default ImagesExample

const win = Dimensions.get('window');

const styles = StyleSheet.create ({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: win.width/2,
        height: win.height/2,
    }
 })
