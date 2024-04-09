import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
const Section1 = ({navigation}) => {
  return (
    <View style={{ marginTop: 5 }}>
      <ImageBackground style={{ width: Dimensions.get('screen').width, borderBottomLeftRadius: 20, borderBottomRightRadius: 50, borderTopEndRadius: 40, alignItems: "center", justifyContent: "center", opacity: 0.7, paddingBottom: 25 }} source={require("../assets/vdf.png")} >



        <View style={styles.container}>
          <TouchableOpacity      onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={48} style={{ margin: 8 }} color="#001845" />
          </TouchableOpacity>
          <Image style={styles.logo} source={require("../assets/logo.png")}></Image>

          <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={{ alignItems: "center" }}>
            <View style={styles.profileCont}>
              <Image source={require("../assets/user.png")} style={{ height: 43, width: 40, resizeMode: "contain" }}></Image>
            </View>
            <Text>Your Profile</Text>
          </TouchableOpacity>
        </View>

        <Text allowFontScaling={false} style={{ fontSize: 25, fontWeight: 700, color: "#d44d5c" }}>FIEDEX POINTS</Text>
        <Text allowFontScaling={false} style={{ fontSize: 23, fontWeight: 900, marginTop: 5, color: "#fff", elevation: 10 }}>5.00</Text>

        <Image source={require("../assets/coin.png")} style={{ width: 250, height: 150, resizeMode: "contain" }}></Image>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ height: 70, width: 180, backgroundColor: "white", borderRadius: 20, marginRight: 10, alignItems: "center", justifyContent: "center", marginLeft: 5 }}>

            <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 500, color: "#f01c8b" }}>Activity Rate  <AntDesign name="infocirlce" size={20} color="#41b7d1" /></Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>0.01 points/hr</Text>


          </View>




          <View style={{ height: 70, width: 180, backgroundColor: "white", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
            <Text allowFontScaling={false} style={{ fontSize: 18, fontWeight: 500, color: "#f01c8b" }}>Your Network  <AntDesign name="infocirlce" size={20} color="#41b7d1" /></Text>
            <Text allowFontScaling={false} style={{ fontSize: 10, fontWeight: 500, marginTop: 5 }}>5 Active</Text>
          </View>


        </View>

      </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // marginTop:30,
    alignItems: "center",
    width: Dimensions.get('screen').width,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25,
    marginLeft: 5
  },
  logo: {
    height: 85,
    width: 100,
    resizeMode: "contain",
    // margin: 2
  },
  profileCont: {
    width: 50,
    height: 50,
    backgroundColor: "#d11780",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Section1