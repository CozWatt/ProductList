import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {MyContext} from './Provider'

function About(){
    const {userName,setUserName} = useContext(MyContext);
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20,}}>Hello{userName} to About Page</Text>
        </View>
    )
}
export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})