import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const width = Dimensions.get('screen').width

const Section5 = () => {
  return (
    // <View style={{marginTop:10,paddingLeft:20,marginBottom:20}}>
        <ImageBackground source={require("../assets/h2.jpg")} style={{ width: width,alignItems:"center",justifyContent:"center",opacity:0.7,padding:20,borderRadius:40,marginTop:20,marginBottom:20 }}  imageStyle={{ borderRadius: 30}}>

      <Text  allowFontScaling={false}style={{fontSize:22,marginBottom:10,color:"black"}}>Do More With Fiedex</Text>

     
      <TouchableOpacity style={{width:220,backgroundColor:"#41b7d1",borderRadius:30,marginRight:10,alignItems:"center",justifyContent:"center",marginBottom:20,padding:20}}>


<Text  allowFontScaling={false}style={{fontSize:15,fontWeight:700,color:"#fff"}}>Learn about Fiedex Points</Text>


    

      </TouchableOpacity>


      <Text  allowFontScaling={false}style={{fontWeight:500,fontSize:22}}>Invite Your Friends</Text>

 <View style={{alignItems:"center"}}>
 
    <Text>Build Your Network</Text>
    <TouchableOpacity style={{width:180,backgroundColor:"#f01c8b",padding:20,alignItems:"center",borderRadius:30,marginTop:10}}>
        <Text  allowFontScaling={false}style={{color:"#fff" }}> <Feather name="copy" size={20} color="#111336" />  Copy invite link</Text>
        </TouchableOpacity>
 </View>

      </ImageBackground>
      
    //   </View>
  )
}

export default Section5