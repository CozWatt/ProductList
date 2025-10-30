import { StyleSheet, Text, View,Image, StatusBar } from 'react-native'
import React from 'react'

export default function PaymentHeaderComponent() {
  return (
    <View>
        <View style={styles.title}>
      <Image source={require('./assets/blacklogo.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        marginTop : StatusBar.currentHeight,
        alignItems : 'center',
    }
})