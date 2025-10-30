import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './Navigation';         
import { CartProvider } from './src/context/CartContext'; 
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent={false}
          />
        <AppNavigation />
        </Provider>
    </SafeAreaProvider>
  );
};

export default App;
