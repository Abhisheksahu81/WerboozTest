import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native"; 
import Arrow from "../asset/Arrow.svg"
import LinearGradient from 'react-native-linear-gradient';


const w = Dimensions.get('window').width;



const Card = ({Icon, number, name, color1, color2, onpress})=>{
    return (
    <TouchableOpacity onPress={onpress}>
        <LinearGradient colors={[color1 ,color2]}  style = {{borderRadius : 6}} start={{x:0, y:0}} end = {{x:1, y:1}}>
            <View style = {styles.card}>
                <View style = {{marginLeft : 20}}>
                   <Text style = {styles.name}>{name}</Text>
                    <View style = {{marginTop : 8, flexDirection : 'row' , justifyContent : "space-between"}}>
                        <Icon height = "32" width ="32"/>
                        <Text style = {styles.number}>{number}</Text>
                        <View style = {{marginRight : 10,}}>
                            <Arrow/>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card : {
        height : 90,
        width : w/2 - 30,
    },
    name :{
        fontSize : 15,
        color : "#FFF",
        fontWeight : "700",
        marginTop :5,
    },
    number :{
        fontSize : 25,
        fontWeight : "800",
        color : "#fff",
       
    },


});
export default Card;