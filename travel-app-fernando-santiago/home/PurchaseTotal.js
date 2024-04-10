import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PurchaseTotal = ({ total }) => {
  return (
    <View>
      <Text style={styles.total}>Valor:</Text>
      <Text style={styles.amount}>{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    marginTop: 20,
    padding: 10,
    alignItems: 'left',
    fontSize: 20,    
    
  },
  amount: {
    padding: 10,
    justifyContent: 'right',
    fontSize: 44,
    marginTop: 5,
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
});

export default PurchaseTotal;
