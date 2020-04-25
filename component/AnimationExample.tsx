import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity,Text } from 'react-native'

class AnimationExample extends Component {
  constructor(props){
    super(props);
    this.animatedWidth = new Animated.Value(50)
    this.animatedHeight = new Animated.Value(100)
  }
   animatedBox = () => {
     if(this.animatedWidth.__getValue() == 200){
       Animated.timing(this.animatedWidth, {
          toValue: 50,
          duration: 1000
       }).start()
       Animated.timing(this.animatedHeight, {
          toValue: 100,
          duration: 500
       }).start()
     }else{
       Animated.timing(this.animatedWidth, {
          toValue: 200,
          duration: 1000
       }).start()
       Animated.timing(this.animatedHeight, {
          toValue: 500,
          duration: 500
       }).start()
     }

   }
   render() {
      const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}></Animated.View>
         </TouchableOpacity>
      )
   }
}
export default AnimationExample

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})
