import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Product } from '../types/product';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const { width } = Dimensions.get('window');

interface ProductCardProps {
  item: Product;
  fullWidth?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, fullWidth = false }) => {
  
  const dispatch = useDispatch();

  return (
    <View style={[styles.card, fullWidth && styles.fullWidthCard]}>
      <Image source={{ uri: item.image }} style={[styles.image, fullWidth && styles.fullImage]} />

      <View style={styles.info}>
        <Text style={styles.label}>{fullWidth ? 'BEST CHOICE' : 'BEST SELLER'}</Text>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          {!fullWidth && (
            <TouchableOpacity style={styles.addButton} onPress={() => dispatch(addToCart(item))}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};


export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 8,
    flex: 0.48,
    alignItems: 'center',
    padding: 10,
  },
  fullWidthCard: {
    flex: 1,
    width: width - 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  fullImage: {
    width: 130,
    height: 130,
    marginBottom: 0,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    color: '#5B9EE1',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginVertical: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A2530',
  },
addButton: {
  backgroundColor: '#5B9EE1',
  width: 36,
  height: 36,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 15, 
  alignItems: 'center',
  justifyContent: 'center',
},
addText: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: -2,
},
});
