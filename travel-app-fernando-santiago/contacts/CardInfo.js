import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardInfo = ({ fieldName, value }) => {
  return (
    <View style={styles.container}>
      <View viewText>
        <Text style={styles.fieldName}>{fieldName}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  fieldName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  value: {
    fontSize: 20,
    color: 'gray',
  },
  viewText: {
  }
});

export default CardInfo;
