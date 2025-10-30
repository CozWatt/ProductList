import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function Btn() {
  const [showHello, setShowHello] = useState(false);

  const handleTermsPress = () => {
    setShowHello(!showHello);
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.bttn} onPress={handleTermsPress}>
        <Text style={styles.txt}>Click</Text>
      </TouchableOpacity>

      {showHello && (
        <View style={styles.hello}>
          <Text style={styles.text}>Hello!</Text>
          <Text style={styles.text}>Anas</Text>
          <Image 
          source={require('../src/assets/Google.png')} style={styles.logo}/>
        </View>
      )}
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Btn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bttn: {
    backgroundColor: 'black',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txt: {
    color: 'white',
  },
  hello: {
    flexDirection : 'row',
    height : 100,
    width : 200,
    marginTop: 20,
  },
  text : {
    marginLeft : 30,
    fontSize : 40,
    marginTop : 30,
    color: 'grey',
    padding: 10,
    borderRadius: 5,
    
  },
  logo : {
    marginTop : 50,
    height : 200,
    width : 200,
  }
});


