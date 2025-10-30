import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
function TextComponent() {
  return (
    <View>
        <View style={styles.container}>
           <Image source = {require('./assets/Vector.png')} style={styles.img}/>
             <Text style={styles.txt}>Subscription Confirmed!</Text>
        </View>
        <View style={styles.newtxt}>
          <Text style={styles.btmtxt} numberOfLines={2}>Your subscription has been {'\n   '} successfully activated.</Text>
        </View>
    </View>
  )
}

export default TextComponent;
const styles = StyleSheet.create({
  newtxt : {
  position : 'absolute',
  marginTop : -380,
  left : 130,
  },
  img : {
    position : 'absolute',
    marginTop : -800,
    left : 90,
  },
  txt : {
    position : 'absolute',
    marginTop : - 800,
    fontWeight : 'bold',
    fontSize : 20,
    left : 120,
    color : '#4E4E4E',
  },
  btmtxt : {
    color : '#4E4E4E',
    fontSize : 16,
  },
    container : {
      flexDirection : 'row',
      gap : 8,
      alignItems : 'center',
      justifyContent : 'center',
    },
})