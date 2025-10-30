import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native'



export default function DashboardButtonComponent(){
    const clicker = () =>{
        console.log('Button was clicked!')
    }
    return(
        <View style = {styles.container}>
            <TouchableOpacity style={styles.btn} onPress={clicker}>
                <Text style={styles.txt}>Go to Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
    position: 'absolute',
    top: '93%', //838
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