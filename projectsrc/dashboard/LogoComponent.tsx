import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'

function LogoComponent(){
    return(
            <View style = {styles.logoContainer}>
                <Image source={require('./assets/dashboardimage.png')}/>
            </View>
    )
}

export default LogoComponent;

const styles = StyleSheet.create({
    logoContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 450
    }
})