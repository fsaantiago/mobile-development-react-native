import {StyleSheet} from 'react-native'

import Constants from 'expo-constants'

import {HomeView} from './Home/HomeView'
import {ContactsView} from './Contacts/ContactsView'
import {SOSView} from './sos/SOSView'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {defacultOptions}>
        <Stack.Screen name='home' component = {HomeView} options = {homeOptions}/>
        <Stack.Screen name='contacts' component = {ContactsView} options = {contactsOptions} />
        <Stack.Screen name='sos' component = {SOSView} options = {sosOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const defacultOptions = {
  headerStyle: {
    backgroundColor: '#25CCB0'
  },
  headerTintColor: 'white'
}

const homeOptions = {
  headerShawn: false
}

const contactsOptions = {
  title: 'Lista de Contatos'
}

const sosOptions = {
  title: 'SOS'
}


const estilo = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  }
})