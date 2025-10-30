import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestingUI = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Kako Sample</Text>
    </View>
  )
}

export default TestingUI

const styles = StyleSheet.create({
  header: {
    width: '100%',           
    height: 60,                 
    backgroundColor: '#1b4c96ff',
    justifyContent: 'center',  
    paddingHorizontal: 20,                   
    shadowColor: '#000',        
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})
