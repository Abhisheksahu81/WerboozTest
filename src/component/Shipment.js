import React from 'react';
import {View, StyleSheet, Text, Dimensions,Image} from 'react-native';
import Profile from '../asset/Profile.svg'
import GreenDot from '../asset/GreenDot.svg'
import CustomButton2 from './CustomButton2';
import Icon7 from '../asset/icon7.svg'


const w = Dimensions.get('window').width;


const Shipment = ()=>{
    return (
        <View style={styles.container}>
            <View style = {{flexDirection : 'row', justifyContent :"space-between", margin : 10}}>
                <View style ={{flexDirection :'row'}}>
                    <Image source= {require('../asset/img.png')}
                        style = {styles.image}
                    />

                    <View style={{marginLeft : 10, marginTop : 10}}>
                        <Text style = {styles.name}>George Lambeau</Text>
                        <View style = {{flexDirection : "row"}} >
                            <View style = {{marginTop : 8}}><GreenDot/></View>   
                            <Text style = {{fontSize : 15, marginLeft : 5}}>Verified Shipper</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:15, marginLeft:8}}>
                     <CustomButton2/>
                </View>
            </View>

            <View style ={{flexDirection : 'row', marginLeft : 20,marginTop : 8}}>
                <Text style = {{color : '#515151' , fontSize : 15}}>Request ID</Text>
                <Text style = {{color : '#434343' , fontSize : 15 , fontWeight : "700", marginLeft : 15}}>#123456789</Text>
            </View>

            <View style = {{width : w - 25, backgroundColor :"rgba(59, 68, 177, 0.25)" , height : 1, alignSelf :"center" , marginTop : 13}}></View>
            
            <View style = {{flexDirection : 'row' , justifyContent :"space-between"}}>

                <View style = {{marginTop:30, marginLeft : 20}}>
                    <Icon7 height = "40" width = {w/2 - 50} />
                    <View style = {{marginTop : -21.5, marginLeft : 100}}><GreenDot/></View>
                    <View style = {{marginTop : -7,marginLeft : 50}}><GreenDot/></View>
                    <View style ={{flexDirection :"row", width : w/2 -50 , justifyContent :"space-between"  , marginTop:20}}>
                        <Text style = {{color : '#252525', fontWeight : '600'}}>Abuja, NG</Text>
                        <Text style = {{color : '#252525', fontWeight : '600'}}>Douala, CM</Text>
                    </View>
                </View>

                <View style = {{margin: 30 ,marginTop : 10}}>
                    <View>
                        <Text>FCL</Text>
                        <Image source={require('../asset/Truck.png')}
                        style = {{height : 50 , width : 120, marginTop:10}}/>
                        <Text >7 X 40’ OPEN TOP</Text>
                    </View>
                </View>
            </View>
            <View style = {{flexDirection :'row' , justifyContent : 'space-between' , paddingHorizontal : 20 , marginTop :-10}}>
                    <View>
                        <Text style = {{fontSize :14,color : "#898989" , fontWeight:'700'}}>Product :</Text>
                        <Text style = {{fontSize :14,color : "#434343" , fontWeight:'600'}}>Freight All Kinds</Text>
                    </View>

                    <View>
                        <Text style = {{fontSize :14,color : "#898989" , fontWeight:'700'}}>Ready For Collection</Text>
                        <Text style = {{fontSize :14,color : "#434343" , fontWeight:'600'}}>04-July-2023</Text>
                    </View>
            </View>

            <View style = {{width : w - 25, backgroundColor :"rgba(59, 68, 177, 0.25)" , height : 1, alignSelf :"center" , marginTop : 13}}></View>

            <Text style = {{marginLeft : 20, color : '#252525' , fontWeight :'700', fontSize : 15, marginTop : 8}}>Service Requested</Text>
            <View style = {{flexDirection : 'row' , marginLeft : 20,marginTop :10 }}>
                <View style ={{margin : 7}}><GreenDot/></View>
                <Text>Custom Clearance</Text>
                <View style ={{margin : 7, marginLeft : 15}}><GreenDot/></View>
                <Text>Inspection</Text>
                <View style ={{margin : 7, marginLeft : 15}}><GreenDot/></View>
                <Text>Insurance</Text>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container : {
        width : w - 20,
        paddingBottom : 20,
        borderRadius : 8,
        alignSelf : "center",
        backgroundColor : '#fff'
    },
    image : {
        marginLeft : 10,
        marginTop : 10,
    },
    name : {
        fontSize : 16,
        fontWeight : "700",
        color : "#252525",
    },
});

export default Shipment;