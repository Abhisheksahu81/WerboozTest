import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, StatusBar} from 'react-native'
import Back from '../asset/Back.svg'
import ThreeDot from '../asset/ThreeDot.svg'
import BrownArrow from '../asset/BrownArrow.svg'
import CustomButton3 from "./CustomButton3";
import Icon21 from '../asset/Icon21.svg'
import Icon22 from '../asset/Icon22.svg'
import Icon23 from '../asset/Icon23.svg'
import Icon24 from '../asset/Icon24.svg'
import Icon25 from '../asset/Icon25.svg'
import Icon26 from '../asset/Icon26.svg'
import Truck from '../asset/Truck.png'
import EditIcon from '../asset/EditIcon.svg'
import VerticalLine from '../asset/VerticalLine.svg'
import CalenderIcon from '../asset/CalenderIcon.svg'
import Chip from "./Chip";
import Chip2 from "./Chip2";


const w  = Dimensions.get('screen').width
const OverViewScreen = ({navigation})=>{

    const handleBack = ()=>{
        navigation.navigate('Home');
    }

    return (
        <View>
        <StatusBar backgroundColor="#fff"></StatusBar>
        <ScrollView style= {{backgroundColor :'#fff'}}>
           
            <View style = {{flexDirection : 'row', justifyContent :'space-between', paddingTop : 15, paddingHorizontal : 15}}>
                
                <TouchableOpacity onPress={handleBack}><Back /></TouchableOpacity>
                <Text style = {{fontWeight : "700", fontSize : 17, color : '#1B1B1B'}}>Shipment Details</Text>
                <TouchableOpacity><ThreeDot /></TouchableOpacity>
            </View>

            <View style = {{marginTop : 20, paddingHorizontal :15, flexDirection :'row', justifyContent :'space-between'}}>
                <View style = {{flexDirection :'row' , marginTop : 5}}>
                    <Text style = {{color : "#444" , fontWeight : '400', fontSize :16}}>Abuja, NG</Text>
                    <View style = {{marginTop : 3 , paddingHorizontal : 10}}><BrownArrow/></View>    
                    <Text style = {{color : "#444" , fontWeight : '400', fontSize :16}}>Dauala, CM</Text>
                </View>
                <CustomButton3/>
            </View>

            <View style = {{flexDirection :"row", justifyContent : 'space-around' , marginTop : 20}}>
                <View style = {{backgroundColor :'#3B44B1' , padding : 10, borderRadius : 10}}>
                    <Icon21/>
                </View>
                <View style = {{backgroundColor :'#F3F3F3' , padding : 10, borderRadius : 10}}>
                    <Icon22/>
                </View>
                <View style = {{backgroundColor :'#F3F3F3' , padding : 10, borderRadius : 10}}>
                    <Icon23/>
                </View>
                <View style = {{backgroundColor :'#F3F3F3' , padding : 10, borderRadius : 10}}>
                    <Icon24/>
                </View>
                <View style = {{backgroundColor :'#F3F3F3' , padding : 10, borderRadius : 10}}>
                    <Icon25/>
                </View>
                <View style = {{backgroundColor :'#F3F3F3' , padding : 10, borderRadius : 10}}>
                    <Icon26/>
                </View>
            </View>

            <Text style = {{fontSize : 16, fontWeight : '700', color : "#1B1B1B", margin : 20}}>OverView</Text>

            <View style = {{width : w - 25, backgroundColor :"rgba(59, 68, 177, 0.25)" , height : 1, alignSelf :"center" }}></View>
            <Text style = {{fontSize : 16, color : "#252525", margin : 10, marginLeft : 20}}>
                ID: KP-563899
            </Text>

            <View style = {{flexDirection : 'row' , justifyContent :'space-around'}}>
            <View style = {{ marginTop : 10}}>
                    <View>
                        <View style = {{flexDirection :'row'}}>
                            <Text>FCL</Text>
                            <View style = {{marginTop : -10}}>
                                <EditIcon height = "36" width="36"/>
                            </View>
                        </View>
                        <Image source={require('../asset/Truck.png')}
                            style = {{height : 50 , width : 120, marginTop:10}}/>
                        <Text >7 X 40’ OPEN TOP</Text>
                    </View>
             </View> 

             <View style = {{flexDirection : 'row' , backgroundColor : '#F8F9FF' , width : w/2-20 , borderRadius :8 , paddingTop : 30}}>
                <View style = {{margin : 10}}><VerticalLine/></View>
                <View>
                    <View style = {{marginTop : -10}}>
                        <Text>PLACE OF LOADING</Text>
                        <Text style = {{color : "#444" , fontWeight : '400'}}>Abuja, NG</Text>
                    </View>
                    <View style = {{marginTop : 20}}>
                        <Text>PLACE OF DISCHARGE</Text>
                        <Text style = {{color : "#444" , fontWeight : '400'}}>Dauala, CM</Text>
                    </View>
                </View>
             </View>    

             </View>

             <View>
                <View style = {{flexDirection :"row" , marginLeft : 20,marginTop : 20}}>
                    <View>
                        <View>
                            <Text style = {styles.field}>VESSEL/CARRIER:</Text>
                            <Text style = {styles.field}>BOOKING REF:</Text>
                            <Text style = {styles.field}>PICKUP DATE:</Text>
                            <View style = {{flexDirection : 'row'}}>
                                <Text style = {styles.field}>DELIVERY DATE</Text>
                                <Text style = {{marginTop : 10, color : '#4431B8'}}>(estimated)</Text>
                                <Text style = {{marginTop : 10}}> :</Text>
                            </View>
                            <Text style = {styles.field}>CUSTOM CLEARANCE:</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{marginLeft : 40}}>
                            <Text style = {styles.field2}>eshipper</Text>
                            <Text style = {styles.field2}>193CA0679394</Text>
                            <Text style = {styles.field2}>12/03/2023</Text>
                            <Text style = {styles.field2}>27/03/2023</Text>
                            <View style = {{flexDirection : 'row'}}>
                                <Text style = {styles.field2}>12/03/2023</Text>
                                <View style = {{marginTop : 10}}>
                                <EditIcon height = "20" width="20"/>
                            </View>
                            </View>
                        </View>
                    </View>
                </View>
               
             </View>   
             <View style = {{flexDirection : 'row' , justifyContent : 'space-between', paddingHorizontal :20 , marginTop : 20}}>
                <View>
                    <Text style = {{fontSize : 15}}>Arrival Date</Text>
                    <View style ={styles.box}>
                        <View style = {{padding : 5 , paddingLeft : 0}}>
                        <CalenderIcon/>
                        </View>
                        <Text>11/02/2023</Text>
                    </View>
                </View>

                <View>
                        <View style = {{flexDirection : 'row'}}>
                                <Text style = { {color : '#7A7A7A' , fontSize : 15}}>Departure Date</Text>
                                <Text style = {{color : '#4431B8'}}>(estimated)</Text>
                            </View>
                    <View style ={styles.box}>
                        <View style = {{padding : 5 , paddingLeft : 0}}>
                        <CalenderIcon/>
                        </View>
                        <Text>11/02/2023</Text>
                    </View>
                </View>
             </View>   

             <Text style = {{color : "#444" , fontWeight : '400', marginLeft : w/2, marginTop : 30}}>COTONOU, BJ</Text>
            <View style = {{alignSelf :'center', marginTop : 10, paddingHorizontal : 15}}>
                <Image source={require('../asset/Image2.png')} style = {{height : 30, width : w-50}}/>
            </View>
            <View style = {{flexDirection :'row', justifyContent :'space-between', paddingHorizontal : 20}}>
                <Text style = {{color : "#444" , fontWeight : '400'}}>Abuja, NG</Text>
                <Text style = {{color : "#444" , fontWeight : '400'}}>Dauala, CM</Text>
            </View>

            <View>
                <View style = {{flexDirection :"row" , marginLeft : 20,marginTop : 20}}>
                    <View>
                        <View>
                            <Text style = {styles.field}>COMMODITY NAME:</Text>
                            <Text style = {styles.field}>PRODUCT CATEGORY:</Text>
                            <Text style = {styles.field2}>Weight of Cargo</Text>
                        </View>
                    </View>

                    <View>
                        <View style = {{marginLeft : 40}}>
                            <Text style = {styles.field2}>Escavators</Text>
                            <Text style = {styles.field2}>Machineries</Text>
                            <Text style = {styles.field2}>100 Tons</Text>
                        </View>
                    </View>
                </View>
            </View>

            <Text style = {{marginTop : 30, marginLeft : 30, color :'#7A7A7A'}}>SERVICES</Text>
            <View style = {{flexDirection : 'row' , marginLeft : 10}}>
             <Chip color = "#CAA212"  name = "Packing" bgcolor="#FDF9E9"/>
             <Chip color = "#F57666"  name = "Inspection" bgcolor="#FEF0EE"/>
             <Chip color = "#5BCDCB "  name = "Insurance" bgcolor="#E3F8F8" />
            </View>
            <View style = {{flexDirection : 'row'  , marginLeft : 10, marginBottom : 50}}>
                <Chip color = "#5BCDCB "  name = "Custom Clearance" bgcolor="rgba(68, 49, 184, 0.12)" />
                <Chip2 color = "#3B44B1 "  name = "Add Service" bgcolor="#fff" />
            </View>
            
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    field : {
        color : '#7A7A7A',
        marginTop : 10,
    },

    field2 : {
        color : '#232323',
        marginTop : 10,
    },
    box: {
        borderWidth : 1,
        borderRadius : 8,
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderColor : '#B7B7B7', 
        flexDirection :'row',
        marginTop : 10,
    }, 
})
export default OverViewScreen;