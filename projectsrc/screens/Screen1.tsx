import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PaymentButtonComponent from '../payment/PaymentButtonComponent'
import PaymentHeaderComponent from '../payment/PaymentHeaderComponent'
import TitleComponent from '../payment/TitleComponent'

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <PaymentHeaderComponent/>
      <PaymentButtonComponent/>
      <TitleComponent/>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})