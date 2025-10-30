import React from "react";
import {Text, View, StyleSheet} from 'react-native'

function FlatCards(){
    return(
        <View>
            <Text style={styles.headerText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card,styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card,styles.cardThree]}>
                    <Text>Green</Text>
                </View>
            </View>
        </View>
    )
}
export default FlatCards

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    headerText : {
        fontSize : 30,
        paddingHorizontal : 10,
    },
    card : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8,
    },
    cardOne : {
        backgroundColor : 'red',
    },
    cardTwo : {
        backgroundColor : 'blue',
    },
    cardThree : {
        backgroundColor : 'green',
    }
})