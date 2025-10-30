import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      {/* 🔍 Local search icon */}
      <Image
        source={require('../assets/Icon.png')} // 👈 replace with your icon path
        style={styles.icon}
      />

      <TextInput
        placeholder="Looking for outfit"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  icon: {
    width: 20,
    height: 30,
    marginRight: 10,
    //tintColor: '#888', // optional: makes it grayish
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
});
