import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LocationInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handlePress = () => {
    // 📌 Later you can open a modal or picker here
    // For now, just set dummy data
    setSelectedCountry('India');
    setSelectedCity('Chennai');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country / City</Text>

      <TouchableOpacity
        style={styles.inputBox}
        activeOpacity={0.7}
        onPress={handlePress}
      >
        {selectedCountry && selectedCity ? (
          <Text style={styles.value}>
            {selectedCountry}, {selectedCity}
          </Text>
        ) : (
          <Text style={styles.placeholder}>Select Country and City</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  placeholder: {
    fontSize: 16,
    color: '#999',
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
});
