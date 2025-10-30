import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Header from './Header';
import NameInput from './NameInput';
import DOBInput from './DOBInput';
import GenderInput from './GenderInput';
import LocationInput from './LocationInput';
import EmailInput from './EmailInput';
import Continue_Button from './Continue_Button';

const CompleteRegistrationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <NameInput />
      <DOBInput />
      <GenderInput />
      <LocationInput />
      <EmailInput />
      <Continue_Button />
    </ScrollView>
  );
};

export default CompleteRegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
});
