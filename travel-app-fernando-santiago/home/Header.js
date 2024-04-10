import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ name, email, photo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <Image source={photo} style={styles.photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#00a8ff',
    padding: 10
    },
  userInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
  email: {
    fontSize: 14,
    color: 'white',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Header;
