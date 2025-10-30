import React from 'react'
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native'

function FancyCard(){
    return(
    <View>
        <Text style={styles.ImageText}>City Images</Text>
        <ScrollView horizontal={true}>
        <View style = {styles.container}>
            <Image source={{uri : 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc85bbcd6ff5fa0fd/650882a0a39cd61ce6ace86f/0_-_BCC-2023-THINGS-TO-DO-IN-SAN-FRANCISCO-AT-NIGHT-0.webp?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart'}}
            style = {styles.Img}
            />
            <Image source={{uri : 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc85bbcd6ff5fa0fd/650882a0a39cd61ce6ace86f/0_-_BCC-2023-THINGS-TO-DO-IN-SAN-FRANCISCO-AT-NIGHT-0.webp?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart'}}
            style = {styles.Img}
            />
            <Image source={{uri : 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc85bbcd6ff5fa0fd/650882a0a39cd61ce6ace86f/0_-_BCC-2023-THINGS-TO-DO-IN-SAN-FRANCISCO-AT-NIGHT-0.webp?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart'}}
            style = {styles.Img}
            />
        </View>
        </ScrollView>
    </View>
    )
}
export default FancyCard;

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    },
    ImageText : {
        margin : 8,
        fontSize : 30,
    },
    Img : {
        height : 100,
        width : 200,
        margin : 8,
    },
})