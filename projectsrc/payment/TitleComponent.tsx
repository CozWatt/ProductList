import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// JSON data
const plans = [
  {
    hash: '$2a$10$5gLS1A1ZH8AdLVZ43F0pBuPLJMEkuFcHCLrmsxgEPbLh1aCDyMZei',
    name: 'Subscription',
    price: 50.0,
    currency: 'RON',
    interval: 'WEEK',
    marketingFeatures: [
      'Comision mic – doar 50 LEI / săptămână',
      'Fără comision procentual ca în alte flote!',
      'Colaborare 100% legală – fără griji legate de ANAF',
      'Te ajutăm cu înființarea PFA – noi facem aproape totul pentru tine!',
    ],
  },
];

export default function TitleComponent() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.txt}>Select a plan</Text>
      {/* Plan List */}
      <FlatList
        data={plans}
        keyExtractor={(item) => item.hash}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <View style={styles.info}>
                <Text style={styles.planName}>{item.name}</Text>
                <Text style={styles.price}>
                  {item.price} {item.currency} / {item.interval}
                </Text>
              </View>

              {/* Badge View */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>50 LEI</Text>
                <Text style={styles.moreText}>week</Text>
              </View>
            </View>

            {/* Features */}
            {item.marketingFeatures.map((feature, index) => (
              <Text key={index} style={styles.feature}>
                • {feature}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  txt: {
    color: '#000',
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffffff',
    borderColor: '#375FFF',
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  info: {
    flex: 1,
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  feature: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  badge: {
    width: 75,
    height: 39,
    backgroundColor: '#2246d3ff',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 800,
    lineHeight: 18,
  },
  moreText: {
    color: '#fff',
    fontSize: 10,
    marginTop: -2,
  },
});
