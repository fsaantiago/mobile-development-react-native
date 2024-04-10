import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

import {Card} from './Card'

const contacts = [
  {
    id: 1,
    name: 'LARISSA',
    type: 'FILHA',
    phone: '(31) 99999-1111'
  },
  {
    id: 2,
    name: 'KAMILA',
    type: 'FILHA',
    phone: '(31) 99999-2222'
  },
  {
    id: 2,
    name: 'ANA',
    type: 'FILHA',
    phone: '(31) 99999-2222'
  }

]

export function ContactsView({navigation}) {
  return (
    <View>
      <Text>Contacts View</Text>
      <FlatList 
        data={contacts}
        renderItem={({item}) => <Card 
                               {...item}
                             />}
        keyExtractor={item => item.id}  
        
      />
    </View>
  )
}