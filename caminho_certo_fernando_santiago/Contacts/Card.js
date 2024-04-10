import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Filha from '../assets/filha.png';

export function Card({type='FILHA', name, phone}) {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={Filha} />
      <View style={styles.viewText}>
        <Text style={styles.text}>{type}</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
    columnGap: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 60,
    borderRadius: 8,
  },
  viewText: {},
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold' 
  },
});
