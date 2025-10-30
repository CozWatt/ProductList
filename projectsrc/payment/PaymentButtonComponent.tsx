import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native'



export default function PaymentButtonComponent(){
    return(
        <View style = {styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
    position: 'absolute',
    top: '93%',
    left: 133,
    transform: [{ translateX: -100 }, { translateY: -25 }],
    },
    btn : {
        backgroundColor: '#375FFF',
        width: 347,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    txt : {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 16,
    }
})