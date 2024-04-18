import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Section8 = ({ navigation }) => {
    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height
    return (
<>

        <ImageBackground source={require("../assets/h2.jpg")} style={{ paddingBottom: 20, opacity: 1 }} imageStyle={{ borderRadius: 20 }}>
         
            <View style={{ width: width, alignItems: "center" }}>
                
                <View style={{backgroundColor:"#fff",opacity:0.7,alignItems:"center",justifyContent:"center",height:"auto",width:width}}>
                <Text allowFontScaling={false} style={{ fontSize: 24, fontWeight: 900, color: "black"}}>Our Trending Quizzes <MaterialIcons name="trending-up" size={30} color="#d11780" /> </Text>
                <Image source={require("../assets/quiz.png")} style={{width:50,height:50,resizeMode:"contain"}}></Image> 
                <Text allowFontScaling={false}
                    style={{
                        height: 1,
                        borderColor: "#f01c8b",
                        borderWidth: 2,
                        marginTop: 5,
                        width: 280,
                        marginBottom: 25,
                    
                    }}
                />
                </View>
             

                <View style={{ borderRadius: 20, padding: 10, width: 300, height: 120, alignItems: "center", justifyContent: "center", backgroundColor: "#3c1642", borderColor: "#3c1642", borderWidth: 5,marginTop:10 }}>
                    <View style={{ marginBottom: 10 ,flexDirection:"row"}}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>20,000 Rewards </Text> 
                    {/* <FontAwesome5 name="coins" size={25} color="#f01c8b" /> */}
                    <Image source={require("../assets/money.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Play Now  <AntDesign name="doubleright" size={18} color="#fff" /> </Text></TouchableOpacity>
                </View>

                <View style={{ borderRadius: 20, padding: 10, width: 300, height: 120, alignItems: "center", justifyContent: "center",backgroundColor: "#3c1642", borderColor: "#3c1642", marginTop: 15, borderWidth: 5 }}>
                <View style={{ marginBottom: 10 ,flexDirection:"row"}}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>10,000 Rewards </Text> 
                    {/* <FontAwesome5 name="coins" size={25} color="#f01c8b" /> */}
                    <Image source={require("../assets/money.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Play Now  <AntDesign name="doubleright" size={18} color="#fff" /></Text></TouchableOpacity>
                </View>

            
                <View style={{ borderRadius: 20, padding: 10, width: 300, height: 120, alignItems: "center", justifyContent: "center",backgroundColor: "#3c1642", borderColor: "#3c1642", marginTop: 15, borderWidth: 5 }}>
                <View style={{ marginBottom: 10 ,flexDirection:"row"}}><Text allowFontScaling={false} style={{ color: "#fff", fontSize: 18 }}>5,000 Rewards </Text> 
                    {/* <FontAwesome5 name="coins" size={25} color="#f01c8b" /> */}
                    <Image source={require("../assets/money.png")} style={{width:30,height:30,resizeMode:"contain"}}></Image>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={{ alignItems: "center", justifyContent: "center", padding: 15, backgroundColor: "#f01c8b", width: 140, borderRadius: 25 }}><Text allowFontScaling={false} style={{ fontSize: 15, color: "white", fontWeight: 700 }}>Play Now  <AntDesign name="doubleright" size={18} color="#fff" /></Text></TouchableOpacity>
                </View>
            </View>

        </ImageBackground>


        </>



    )
}

export default Section8