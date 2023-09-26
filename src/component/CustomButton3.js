import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import PlusIcon from "../asset/PlusIcon.svg"
const CustomButton3 = ()=>{
    return (
        <View style = {{alignSelf : 'center'}}>
            <View style = {styles.container}>
            <Text style = {styles.text}>Transhipment Loaded</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        paddingHorizontal : 15,
        flexDirection : "row",
        justifyContent : 'center',
        alignContent : "center",
        borderRadius : 17,
        backgroundColor :"#4431B8",
    },
    text:{
        fontSize : 14,

        color : "#FFF",
        
        fontWeight : 'bold',
    },
})

export default CustomButton3;