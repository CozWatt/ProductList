import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderInput: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('');

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Gender</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'Male' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('Male')}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.optionText,
              selectedGender === 'Male' && styles.selectedText,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'Female' && styles.selectedOption,
          ]}
          onPress={() => handleSelect('Female')}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.optionText,
              selectedGender === 'Female' && styles.selectedText,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenderInput;

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 15,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  selectedOption: {
    backgroundColor: 'white',
    borderColor: '#FF4FC3',
  },
  optionText: {
    fontSize: 16,
    color: 'grey',
  },
  selectedText: {
    color: '#FF4FC3',
    fontWeight: '600',
  },
});
