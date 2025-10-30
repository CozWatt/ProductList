import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { removeFromCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';

const CartScreen = () => {
//   const { cartItems, removeFromCart, subtotal } = useCart();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const dispatch = useDispatch();
    const Navigation = useNavigation();

  const shipping = 40.9;
  const total = subtotal + shipping;

  return (
    <View style={styles.container}>
        <View >
          <TouchableOpacity onPress={()=> Navigation.goBack()} style={styles.backDirectionImage}>
            <Image source={(require('../assets/backDirection.png'))}
            style={styles.backDirectionImage}
             />
          </TouchableOpacity>
             <Text style={styles.title}>My Cart</Text>
             <View style={{width: 20}}/>
        </View>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1} style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Text style={styles.qty}>Qty: {item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
              <Text style={styles.delete}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.summary}>
        <View style={[styles.row]}>
          <Text>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text>Shipping</Text>
          <Text>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total Cost</Text>
          <Text style={styles.total}>${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15, paddingTop:35 },
  title: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#1A2530' },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  image: { width: 70, height: 70, borderRadius: 10, marginRight: 10 },
  name: { fontSize: 14, fontWeight: 'bold', color: '#000' },
  price: { color: '#5B9EE1', fontWeight: '600' },
  qty: { fontSize: 12, color: '#777' },
  delete: { fontSize: 20, color: 'red', marginLeft: 10 },
  summary: { marginTop: 20, bottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4, bottom: 10},
  totalLabel: { fontWeight: 'bold', fontSize: 16, color: '#1A2530' },
  total: { fontWeight: 500, fontSize: 16 },
  checkoutBtn: {
    backgroundColor: '#5B9EE1',
    borderRadius: 25,
    paddingVertical: 12,
    width: 335,
    height: 54,
    justifyContent: 'center',
    left: 26
  },
  checkoutText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
  backDirectionImage: {
    height: 11.5,
    //top: 12
  },
});
