// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// export default function ApiComponent(){
//     type post = {
//         title: string;
//         body: string;
//         id: number;
//     };
//     const[data, setData] = useState<post | null>(null)
//     const[error,setError] = useState(null);

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts/4')
//         .then((response)=> response.json())
//         .then(json =>{
//             setData(json)
//         })
//         .catch((error)=>{
//             setError(error.message);
//         });
//     },[]);

//     if(error){
//         return(
//             <View style = {styles.container}>
//                 {error &&
//                 <Text style={{color: 'red', fontSize : 20}}>{error}</Text>
//                 }
//             </View>
//         )
//     }


//     return(
//         <View style = {styles.container}>
//             <Text style={styles.title}>{data?.title}</Text>
//             <Text>{data?.body}</Text>
//         </View>
//     )

// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         justifyContent : 'center',
//         alignItems : 'center',
//     },
//     error : {
//         color: 'red',
//         fontWeight: 'bold',
//         fontSize : 20,
//     },
//     title : {
//         fontWeight : 'bold',
//         fontSize : 20,
//         padding : 8,
//     }
// })


import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {useState, useEffect} from 'react'

export default function ApiComponent(){
    type posts = {
        title: string,
        body: string,
    }

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/4')
        .then((response)=>response.json())
        .then(json =>{
            setData(json);
        })
        .catch((error)=>{
            console.error(error);
        })
    },[]);

    if(error){
        return(
            <View style={styles.container}>
                {error &&
                <Text style={StyleSheet.text}>{error}</Text>
                }
            </View>
        )
    }

    return(
        <View>
            <Text>data?.title</Text>
            <Text>data?.</Text>
        </View>
    )
}


