import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

function ElevatedCards(){
    return(
        <View>
            <Text style={styles.header}>Elevated Cards</Text>
            <ScrollView horizontal = {true}style = {styles.container}>
                <View style={[styles.card, styles.cOne]}>
                    <Text>Card One</Text>
                </View>
                <View style={[styles.card, styles.cTwo]}>
                    <Text>Card Two</Text>
                </View>
                <View style={[styles.card, styles.cThree]}>
                    <Text>Card Three</Text>
                </View>
                <View style={[styles.card, styles.cFour]}>
                    <Text>Card Four</Text>
                </View>
                <View style={[styles.card, styles.cFive]}>
                    <Text>Card Five</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default ElevatedCards;

const styles = StyleSheet.create({
    header : {
        fontSize : 30,
        margin : 8,
    },
    container  : {
        flexDirection : 'row',
    },
    card : {
        justifyContent: 'center',
        alignItems : 'center',
        height : 100,
        width : 100,
        margin : 8,
        borderRadius : 8,
    },
    cOne : {
        backgroundColor : 'orange',
    },
    cTwo : {
        backgroundColor : 'pink',
    },
    cThree : {
        backgroundColor : 'grey',
    },
    cFour : {
        backgroundColor : 'green',
    },
    cFive : {
        backgroundColor : 'pink',
    },
})