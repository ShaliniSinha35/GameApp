import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../AuthContext';
const Section1 = ({navigation}) => {
  const {mobile}=useAuth()
  return (
    <View style={{ marginTop: 0 }}>
      <ImageBackground style={{ width: Dimensions.get('screen').width, borderBottomLeftRadius: 20, borderBottomRightRadius: 50, borderTopEndRadius: 40, alignItems: "center", justifyContent: "center", paddingBottom: 45 }} source={require("../assets/vfrg.png")} >



        <View style={styles.container}>
          {/* <TouchableOpacity      onPress={() => navigation.openDrawer()}>
          <Entypo name="menu"  size={40} style={{ margin: 8 }} color="#edf6f9" />

          </TouchableOpacity> */}
          
          {/* <Image style={styles.logo} source={require("../assets/logo.png")}></Image> */}

          <TouchableOpacity onPress={()=>navigation.navigate("ProfileScreen")} style={{ alignItems: "center"}}>
            <View style={styles.profileCont}>
              <Image source={require("../assets/user.png")} style={{ height: 43, width: 40, resizeMode: "contain" }}></Image>
            </View>
            <Text style={{color:"white"}}>{mobile}</Text>
          </TouchableOpacity>
        </View>



<View style={{backgroundColor:"#fff",padding:20,opacity:0.7,borderRadius:25,alignItems:"center"}}>
<Text allowFontScaling={false} style={{ fontSize: 25, fontWeight: 800, color: "#f01c8b" }}>FIEDEX POINTS</Text>
<Text allowFontScaling={false} style={{ fontSize: 23, fontWeight: 900, marginTop: 5, color: "black", elevation: 10 }}>5.00</Text>

</View>

        {/* <Image source={require("../assets/coin.png")} style={{ width: 250, height: 150, resizeMode: "contain" }}></Image> */}

        <View style={{ flexDirection: "row", justifyContent: "space-around" ,marginTop:65}}>
          <View style={{ height: 70, width: 180, backgroundColor: "#f01c8b", borderRadius: 20, marginRight: 10, alignItems: "center", justifyContent: "center", marginLeft: 5,opacity:0.9 }}>

            <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Activity Rate  <AntDesign name="infocirlce" size={20} color="#41b7d1" /></Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>0.01 points/hr</Text>


          </View>




          <View style={{ height: 70, width: 180, backgroundColor: "#f01c8b", borderRadius: 20, alignItems: "center", justifyContent: "center",opacity:0.9 }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Your Network  <AntDesign name="infocirlce" size={20} color="#41b7d1" /></Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>0 Active</Text>
          </View>


        </View>

      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {  
    width: Dimensions.get('screen').width,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 25,
    // marginLeft: 10,
    marginRight: 10,
    marginTop:5,  
   justifyContent:"flex-end"
  },
  logo: {
    height: 70,
    width: 80,
    resizeMode: "contain",
    // margin: 2
  },
  profileCont: {
    width: 50,
    height: 50,
    backgroundColor: "#d11780",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
 
  
  }
});

export default Section1