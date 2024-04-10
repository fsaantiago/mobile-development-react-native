import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Button title="PAGAR" color="green" style={styles.button, styles} />
      <Button title="COPIAR CÓDIGO DE BARRA" color="green" style={styles.button} />
      <Button title="GERAR BOLETO" color="green" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 10,
    gap: 10, 
    marginLeft: 10
  },
  button: {
    backgroundColor: '008000',
    paddingHorizontal: 20,
    width: '100%',
    flex: 1
  },
});

export default Footer;
