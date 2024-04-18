import { View, Text,ImageBackground, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import { FontAwesome6,AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import { useAuth } from '../AuthContext';


const Profile = ({navigation}) => {

  const { isLoginValue , isAlreadyLogin,logout,isLogoutValue} = useAuth();

  const {mobile}=useAuth()






  const handleLogout=async()=>{
   
    logout()

}
  return (
  <ImageBackground style={{width:width,height:height,opacity:0.9}} source={require("../assets/h2.jpg")}>

    {/* <View style={{alignItems:"center",justifyContent:"center",marginTop:60}}>
    <FontAwesome6 name="circle-user" size={54} color="#242424" />   
    </View> */}

<TouchableOpacity  style={{ alignItems: "center", marginTop:40 }}>
            <View style={styles.profileCont}>
              <Image source={require("../assets/user.png")} style={{ height: 85, width: 80, resizeMode: "contain" }}></Image>
            </View>
            <Text style={{fontWeight:800}}>{mobile}</Text>
            <TouchableOpacity onPress={()=>handleLogout()} style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25,marginTop:20 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Logout </Text></TouchableOpacity>

          
          </TouchableOpacity>

  </ImageBackground>
  )
}

export default Profile

const styles = StyleSheet.create({
  
  profileCont: {
    width: 100,
    height: 100,
    backgroundColor: "#3c1642",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});