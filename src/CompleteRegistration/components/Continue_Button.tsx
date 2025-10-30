// 
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Continue_Button = () => {
  const navigation = useNavigation<any>(); // 👈 Get navigation object

  const handleContinue = () => {
    navigation.navigate('Registration'); // 👈 Navigate to your RegistrationScreen
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleContinue}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  );
};

export default Continue_Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF4FC3',
    marginHorizontal: 20,
    marginTop: 180,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
