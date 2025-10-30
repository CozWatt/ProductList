import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NameInput: React.FC = () => {
  const [name, setName] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    fontSize: 16,
    color: '#000',
  },
});
