import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import PlusIcon from "../asset/PlusIcon.svg"
const CustomButton = ()=>{
    return (
        <View style = {{alignSelf : 'center'}}>
            <View style = {styles.container}>
            <View>
                <PlusIcon height = "20" width = "20"/>
            </View>
                <Text style = {styles.text}>New Shipper</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        flexDirection : "row",
        justifyContent : 'center',
        alignContent : "center",
        borderRadius : 5,
        backgroundColor :"#4431B8",
    },
    text:{
        fontSize : 14,
        marginLeft : 10,
        color : "#FFF",
        
        fontWeight : 'bold',
    },
})

export default CustomButton;