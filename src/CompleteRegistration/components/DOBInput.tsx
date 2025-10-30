import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DOBInput: React.FC = () => {
  const [dobText, setDobText] = useState<string>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = moment(date).format('DD/MM/YYYY');
    setDobText(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.inputBox} activeOpacity={0.7} onPress={showDatePicker}>
        <Text style={[styles.placeholder, dobText && styles.value]}>
          {dobText || 'Select Date of Birth'}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default DOBInput;

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
    color: '#000',
  },
});
