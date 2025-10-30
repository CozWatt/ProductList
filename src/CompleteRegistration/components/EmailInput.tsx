import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const EmailInput = () => {
  const handleVerify = () => {
    console.log('Verify clicked');
    // Add your verification logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email <Text style = {styles.oTxt}>(optional)</Text></Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  oTxt : {
    fontSize : 13,
    color : 'grey',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 17,
  },
  verifyText: {
    color: '#FF4FC3',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
