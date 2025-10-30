// src/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CompleteRegistrationScreen from './CompleteRegistration/components/CompleteRegistrationScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen 
          name="CompleteRegistration" 
          component={CompleteRegistrationScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
