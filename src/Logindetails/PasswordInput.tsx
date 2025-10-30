import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PasswordInput: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  return (
    <View style={styles.mainContainer}>
      {/* Password Field */}
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          maxLength = {8}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Re-type Password Field */}
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Re-type password"
          maxLength={8}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Text style={styles.eyeText}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    gap: 15, 
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingVertical: 5,  
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  eyeText: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
});

export default PasswordInput;
