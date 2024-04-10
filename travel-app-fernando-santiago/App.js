import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './home/Header';
import CardInfo from './contacts/CardInfo';
import PurchaseTotal from './home/PurchaseTotal';
import Footer from './home/Footer';

const App = () => {
  const data = [
    { id: '1', fieldName: 'Número do Cartão', value: '5324 2843 0393 7591' },
    { id: '2', fieldName: 'Data de Validade', value: '22/10/2021' },
    { id: '3', fieldName: 'Código de Segurança (CVV)', value: '246' },
  ];
  const renderItem = ({ item }) => {
    return (
      <CardInfo fieldName={item.fieldName} value={item.value} />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        name="Erin"
        email="erin.henderson@gmail.com"
        photo={require('./assets/foto.png')}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <PurchaseTotal total="R$3.843" />  
      <CardInfo fieldName="Data de Vencimento" value="22/10/2021" />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
