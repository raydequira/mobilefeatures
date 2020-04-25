import React, { Component } from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'

class ButtonExample extends Component {
    handlePress(){
        alert("I am Red button");
    }
    render(){
        return (
            <Button
               onPress = {this.handlePress}
               title = "Red button!"
               color = "red"
            />
         )
    }
 }
export default ButtonExample
