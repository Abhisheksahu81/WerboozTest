import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList,Image, TouchableOpacity, StatusBar} from 'react-native';
import Profile from '../asset/Profile.svg'
import NotificationIcon from '../asset/NotificationIcon.svg'
import Icon1 from '../asset/Icon1.svg';
import Icon2 from '../asset/Icon2.svg';
import Icon3 from '../asset/Icon3.svg';
import BrownArrow from '../asset/BrownArrow.svg'
import CustomButton from './CustomButton';
import Card from './card';
import Shipment from './Shipment';
import OverViewScreen from './OverViewScreen';


const FirstScreen = ({navigation}) => {

    const data = [{ key: '1', name: '1' },
    { key: '2', name: '2' },
    { key: '3', name: '3' },
    { key: '4', name: '3' },
    { key: '5', name: '3' },
    { key: '6', name: '3' },
    { key: '7', name: '3' },
  ];

    const handlePress = ()=> {
        console.log("Pressed");
        navigation.navigate('OverView', {name : 'Abhishek'});
    }

    const renderItem = ()=>{
        return (
            <View style= {{marginTop : 15}}>
                 <Shipment/>
            </View>
        )
    }

    const renderHeader = () => {
        return (
        <View>
        <StatusBar backgroundColor="#fff"></StatusBar>
            <View style={styles.top}>
                <View style = {{flexDirection :"row"}}>
                    <View style = {styles.profileContainer}>
                     <View style = {styles.profile}>
                        <Profile height = "40" width = "40"/>  
                     </View>     
                    </View>
                <View style = {styles.namecontainer}>
                    <Text style = {styles.name}>Hey, Diana!</Text>
                    <Text style = {styles.designation}>Forwarder</Text>
                </View>
            </View>
            <View style = {styles.icons}>
                <View style = {{padding : 10}}>
                    <NotificationIcon height = "50" width = "50"/>
                </View>
                <View style = {{padding : 10}}>
                    <Image source = {require('../asset/Message.png')} style={{height : 50 , width :50}}/>
                </View>
            </View>
        </View>

        <View style = {styles.secondView}>
            <View style = {{flexDirection :"row"}}>
                <View style = {{padding : 10}}>
                 <Icon1/>
                </View>

                <View style = {{padding : 10}}>
                 <Icon2/>
                </View>  
            </View>
            <CustomButton/>
        </View>

        <View style = {{flexDirection : 'row' , justifyContent : "space-around", marginTop : 20}}>
            <Card name = "Total Shipment" number = "124" color1 = "#4431B8"  color2 = "#4431B8"  Icon = {Icon3} onpress={handlePress}/>
            <Card name = "Active Shipment" number = "54" color1 = "#00BC79"  color2 = "#47C93C"  Icon = {Icon3}  onpress={handlePress}/>
        </View>
        <View style = {{flexDirection : 'row' , justifyContent : "space-around", marginTop : 20}}>
            <Card name = "Delayed Shipment" number = "124" color1 = "#450042" color2 = "#FF5048"  Icon = {Icon3}  onpress={handlePress}/>
            <Card name = "Pending Shipment" number = "54" color1 = "#FF9E79" color2 = "#FAD34D"  Icon = {Icon3}  onpress={handlePress} />
        </View>

        <View style = {{flexDirection : 'row', justifyContent : "space-between" , marginTop : 20}}>
            <Text style = {styles.heading}>Shipments in Transit</Text>
            <View style = {{flexDirection : "row" , marginRight : 20}}>
                <Text>See all</Text>
                <View style = {{marginTop : 3, marginLeft : 8}}>
                    <BrownArrow/>
                </View>
            </View>
        </View>
        </View>
       
        );
      };


    return (
        <View style = {{backgroundColor :"#4431B80A"}}>
        
        
       
       
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            ListHeaderComponent={renderHeader}
        />
        
       
       

        </View>
    )
} 

const styles = StyleSheet.create({
    top : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        PaddingTop : 10, 
        backgroundColor : "#fff"
    },
    icons : {
       flexDirection : 'row',
      
       
    },
    designation: {
        marginLeft : 5,
    },
    heading : {
        fontSize : 16,
        color : "#252525",
        marginLeft : 20,
        fontWeight : "700",

    },
    name : {
        fontSize : 15,
        marginTop : 5,
        color : "#353535",
        marginLeft : 5,
        fontWeight : 'bold',
    },
    profileContainer: {
        marginLeft : 15,
        height : 60,
        width : 60,
        borderRadius : 8,
        backgroundColor : '#EBEAEE',
    },
    profile : {
        marginVertical : 10,
        marginHorizontal  : 10,
    },
    secondView : {
        paddingTop : 20,
        paddingBottom : 10,
        paddingHorizontal : 20,
        // backgroundColor : "red",
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : "#fff"
    },

}) 
export default FirstScreen;
