import React from "react";
import {View, Text,StyleSheet} from 'react-native';

const Chip = ({name, color, bgcolor}) =>{
    return (
        <View>
            <View style = {{borderWidth : 1, borderColor : color, backgroundColor : bgcolor, borderRadius : 10, padding : 8, marginLeft : 20, marginTop : 10}}>
                <Text style = {{fontSize : 16, color : {color} , fontWeight : 600}}>{name}</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
});
export default Chip;