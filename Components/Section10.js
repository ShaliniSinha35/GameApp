import { View, Text, Dimensions, ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { FontAwesome6,AntDesign } from '@expo/vector-icons';
const width= Dimensions.get('screen').width;

const Section10 = () => {
    // ,backgroundColor:"#ffc2e2"
  return (
   <ImageBackground source={require("../assets/bg9.png")} style={{width:width,marginTop:20,resizemode:"contain",borderRadius:30,alignItems:"center",justifyContent:"center",padding:20,paddingBottom:20}} imageStyle={{borderRadius:30}}>

    <Text allowFontScaling={false} style={{color:"black",fontSize:25,fontWeight:800}}>Crypto Camp</Text>
      <Image source={require("../assets/camp.png")} style={{width:50,height:50,resizemode:"contain"}}></Image>
    <TouchableOpacity  style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25,marginTop:20 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}> Quiz To Earn <AntDesign name="doubleright" size={18} color="#fff" />  </Text></TouchableOpacity>


   </ImageBackground>
  )
}

export default Section10