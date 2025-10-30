import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Product } from '../types/product';
import HeaderComponent from '../components/HeaderComponent';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#1e90ff" />
      </View>
    );
  }

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent />
        <SearchBar value={search} onChangeText={setSearch} />

        {/* Popular Outfits Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Outfits</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <FlatList
          data={filtered.slice(0, 6)} 
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => <ProductCard item={item} />}
          scrollEnabled={false}
        />

        {/* New Arrivals Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {filtered.length > 0 && (
          <ProductCard item={filtered[3]} fullWidth /> // single wide card
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    paddingHorizontal: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#1e90ff',
  },
});
