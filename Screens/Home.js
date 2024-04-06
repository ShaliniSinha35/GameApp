import { View, Text, StyleSheet,Image, Dimensions,SafeAreaView, StatusBar,Platform, ImageBackground, ScrollView } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Section6 from '../Components/Section6';

// 111336 BACKGROUND COLOR
// cac51d LOGO COLOR



// 1 f01c8b
// 2 d11780
// 3 41b7d1

const width = Dimensions.get('screen').width
const Home = () => {
  return (

    <SafeAreaView
 
    style={{
      paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: "white",
      // marginTop:5
    }}
  >
    <StatusBar
      backgroundColor={"white"}
      barStyle={"dark-content"}
      translucent={false}
    />

<ScrollView>

           {/* <View style={styles.container}>

           <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={44} style={{margin:8}} color="#cac51d" />
       <Image style={styles.logo} source={require("../assets/logo1.png")}></Image>
          
         <View style={{alignItems:"center"}}>
         <View style={styles.profileCont}>
         <Image source={require("../assets/user.png")} style={{height:43,width:40,resizeMode:"contain"}}></Image>
       </View>
       <Text>John</Text>
         </View>
    </View> */}




    <Section1></Section1>
    <Section3></Section3>
    {/* <Text  allowFontScaling={false} 
            style={{
              height: 1,
              borderColor: "#41b7d1",
              borderWidth: 2,
              marginTop: 18,
            
            }}
          /> */}
    <Section4></Section4>
    {/* <Text  allowFontScaling={false} 
            style={{
              height: 1,
              borderColor: "#41b7d1",
              borderWidth: 2,
              marginTop: 18,
            
            }}
          />  */}
    <Section5></Section5>

    
    <Section6></Section6>
    
    <Section2></Section2>

    {/* <Section6></Section6> */}
   
    </ScrollView>
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop:30,
      alignItems:"center",
      width:Dimensions.get('screen').width,
      flexDirection:"row",
      justifyContent:"space-around"
    },
    logo:{
       height:80,
       width:100,
       resizeMode:"contain",
       margin:2
    },
    profileCont:{
        width:50,
        height:50,
        backgroundColor:"#cac51d",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    }
  });

export default Home