import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import DashboardButtonComponent from '../dashboard/DashboardButtonComponent'
import HeaderComponent from '../dashboard/HeaderComponent'
import LogoComponent from '../dashboard/LogoComponent'
import TextComponent from '../dashboard/TextComponent'

const Screen2 = () => {
  return (
    <View style = {styles.container}>
      <DashboardButtonComponent/>
      <HeaderComponent/>
      <LogoComponent/>
      <TextComponent/>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})