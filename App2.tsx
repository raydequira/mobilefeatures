import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import List from './component/List'
import Input from './component/Input'
import ViewScrollSample from './component/ScrollView';
import ImagesExample from './component/ImagesExample';
import HttpCall from './component/HttpCall';
import ButtonExample from './component/ButtonExample';
import TouchableOpacityExample from './component/TouchableOpacityExample';
import TouchableNativeFeedbackExample from './component/TouchableNativeFeedbackExample';
import AnimationExample from './component/AnimationExample';


const App = () => {
    return (
        <View>
            <ScrollView>
                <List/>
                <Input />
                <ViewScrollSample />
                <ImagesExample />
                <HttpCall />
                <ButtonExample />
                <TouchableOpacityExample />
                <TouchableNativeFeedbackExample />
                <AnimationExample />
            </ScrollView>
        </View>

    )
 }
 export default App
