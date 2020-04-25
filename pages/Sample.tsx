import React from 'react'
import { TouchableOpacity, Text, Button, View, ScrollView, StyleSheet } from 'react-native';

import ImagesExample from '../component/ImagesExample'
import Input from '../component/Input'
import AnimationExample from '../component/AnimationExample'
import ButtonExample from '../component/ButtonExample'
import HttpCall from '../component/HttpCall'
import List from '../component/List'
import ScrollViewExample from '../component/ScrollView'


export default function Sample({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Home')
  }
  let show;
  let compo = navigation.getParam('component');
  let body = navigation.getParam('body');

  if (compo == 'ImagesExample') {
      show = <ImagesExample />
  } else if (compo == 'Input')  {
      show = <Input />
  } else if (compo == 'Animation')  {
      show = <AnimationExample />
  } else if (compo == 'Button')  {
      show = <ButtonExample />
  } else if (compo == 'HttpCall')  {
      show = <HttpCall />
  } else if (compo == 'List')  {
        show = <List />
  } else if (compo == 'ScrollView')  {
        show = <ScrollViewExample />
  }

   return (
     <ScrollView>
      <View style={styles.wrapper}>
        <Text style={styles.text} >{body}</Text>
      </View>
      <View>{show}</View>
     </ScrollView>
   )
}
export default Sample

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      paddingTop: 10,
      alignItems: 'center'
   },
   text: {
     fontWeight: 'bold'
   }
})
