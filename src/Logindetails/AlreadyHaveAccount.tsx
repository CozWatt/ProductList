import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AlreadyHaveAccount: React.FC = () => {
  const handleLoginPress = () => {
    Alert.alert('🔐 Login button clicked');
    // 👉 Navigate to Login screen here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Already have an account? </Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
  },
  text: {
    fontSize: 17,
    color: '#555',
  },
  linkText: {
    fontSize: 14,
    color: '#C2185B',         // iOS blue link
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default AlreadyHaveAccount;
