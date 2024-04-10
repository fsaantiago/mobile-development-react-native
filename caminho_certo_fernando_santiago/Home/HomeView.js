import {View, Text, StyleSheet } from 'react-native'

import {Button} from 'react-native-paper'

import {Menu} from './Menu'
import {Header} from './Header'

import Constants from 'expo-constants' //biblioteca usada apenas no HomeView


export function HomeView({navigation}) {
  return(
    <View style={styles.viewMain}>
    <Header />
    <View style={styles.buttons}>
      <Menu 
        title='sos' 
        color='red' 
        onPress={() => navigation.navigate('contacts')} 
      />

      <Menu 
        title='registro'
        onPress={() => alert('Clique REGISTRO')}
      />

      <Menu 
        title='rastreio'
        onPress={() => alert('Clique RASTREIO')} 
      />
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
})