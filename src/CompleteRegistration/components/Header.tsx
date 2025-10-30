import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.arrow}>←</Text>
      <Text style={styles.title}>Complete Your Registration</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ffffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffffff',
  },
  arrow: {
    fontSize: 35,
    marginRight: 10,
    marginBottom : 10,
    fontWeight : 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});
