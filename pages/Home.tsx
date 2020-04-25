import React, { useState } from 'react'
import { StyleSheet,TouchableOpacity, Text, FlatList, View  } from 'react-native';

export default function Home({navigation}) {
  const [features, setFeatures] = useState([
    { title: 'Images', component: 'ImagesExample', body: 'This is a sample of Image in react' , key: '1' },
    { title: 'Input', component: 'Input', body: 'This is a sample of inputs' , key: '2' },
    { title: 'Animation', component: 'Animation', body: 'Click in the box to see animation' , key: '3' },
    { title: 'Buttons', component: 'Button', body: 'This is just a button' , key: '4' },
    { title: 'Http call', component: 'HttpCall', body: 'This is http call using fetch' , key: '5' },
    { title: 'List', component: 'List', body: 'This is List in react' , key: '6' },
    { title: 'Scroll View', component: 'ScrollView', body: 'Try to scroll' , key: '7' }
  ]);
  const pressHandler = () => {
    navigation.navigate('Features')
  }
   return (
     <FlatList
      data={features}
      renderItem={({item}) => (
        <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Features', item ) }>
            <Text>{ item.title }</Text>
        </TouchableOpacity>
        </View>
      )}
     />

   )
}
export default Home

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
    marginHorizontal: 10
  }
})
