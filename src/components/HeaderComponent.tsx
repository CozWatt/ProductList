import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const HeaderComponent = () => {
  // const { cartCount } = useCart();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.locationLabel}>Store Location</Text>
        <Text style={styles.location}>Bangalore, India</Text>
      </View>

      {/* Cart Icon */}
      <TouchableOpacity
        style={{ position: 'relative' }}
        onPress={() => navigation.navigate('CartScreen' as never)}
      >
        <Image source={require('../assets/cart.png')} style={styles.logo} />
        {cartCount > 0 && <View style={styles.redDot} />}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    top: 20,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
  },
  locationLabel: {
    fontSize: 12,
    color: 'gray',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    width: 30,
    height: 30,
  },
  redDot: {
    position: 'absolute',
    top: -3,
    right: -3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});
