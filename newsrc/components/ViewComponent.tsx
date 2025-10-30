import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, useColorScheme, StatusBar} from 'react-native';
import {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function ViewComponent(){
    const [name, setName] = useState('Anas')
    const btn = () =>{
        setName('Abu')
    }
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <SafeAreaProvider>
            <StatusBar 
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor='black'
            />
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style={styles.headerName}>Application</Text>
            </View>
            <View style={styles.button}>
                <Text>{name}</Text>
                <Button title='click' onPress={btn}/>
            </View>
        </View>
        </SafeAreaProvider>
    )
}

export default ViewComponent;

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    header : {
        position : 'absolute',
        backgroundColor : 'black',
        marginTop : StatusBar.currentHeight,
        height : 40,
        top : 0,
        left : 0,
        right : 0,
        justifyContent : 'center',
        alignItems : 'center',
    },
    headerName : {
        color : 'white',
    },
    button : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
})