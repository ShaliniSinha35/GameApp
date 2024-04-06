import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Section4 = () => {
  return (

    <ImageBackground source={require("../assets/bg8.png")} style={{marginTop:15,paddingLeft:20,marginBottom:20,width:Dimensions.get('screen').width,opacity:0.7}}>
      <Text  allowFontScaling={false}style={{fontSize:24,fontWeight:700,color:"black"}}>Your Dashboard  <MaterialIcons name="dashboard" size={24} color="#d11780" /></Text>
      <Text  allowFontScaling={false} 
            style={{
              height: 1,
              borderColor: "#41b7d1",
              borderWidth: 2,
              marginTop: 5,
              width:200,
              marginBottom:25,
              marginLeft:5
            
            }}
          /> 

      <View style={{height:80,width:300,backgroundColor:"#edf6f9",borderRadius:20,marginRight:10,alignItems:"center",justifyContent:"space-between",marginBottom:20,flexDirection:"row",paddingLeft:20,paddingRight:10}}>

        <View style={{alignItems:"center"}}>
        <Text  allowFontScaling={false}style={{fontSize:18,fontWeight:500,color:"#111336"}}><FontAwesome name="long-arrow-right" size={20} color="#41b7d1"/>  Active Referrals</Text>
       <Text  allowFontScaling={false}style={{fontSize:25,fontWeight:500,marginTop:5}}> 0</Text>
        </View>

        <View>
        <FontAwesome5 name="coins" size={24} color="#ffd000" />
        </View>

        </View>

    <View style={{height:80,width:300,backgroundColor:"#edf6f9",borderRadius:20,marginRight:10,alignItems:"center",justifyContent:"space-between",marginBottom:20,flexDirection:"row",paddingLeft:20,paddingRight:10}}>

        <View style={{alignItems:"center"}}>
        <Text  allowFontScaling={false}style={{fontSize:18,fontWeight:500,color:"#111336"}}><FontAwesome name="long-arrow-right" size={20} color="#41b7d1" />  Your Wallet</Text>
       <Text  allowFontScaling={false}style={{fontSize:25,fontWeight:500,marginTop:5}}>0.00</Text>
       </View>
       <View>
       <FontAwesome5 name="wallet" size={24} color="#ffd000"/>
       </View>
     
        </View>

    </ImageBackground>
  )
}

export default Section4