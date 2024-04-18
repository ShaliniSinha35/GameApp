import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Alert,
    ScrollView,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Ionicons,FontAwesome } from "@expo/vector-icons";
  import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { Fontisto,Entypo } from '@expo/vector-icons';
  import { AuthProvider, useAuth } from "../AuthContext";
 const height = Dimensions.get("screen").height;
 const width = Dimensions.get('screen').width;
  
  const RegisterScreen = ({navigation}) => {

const {register} = useAuth()
const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [country, setCountry] = React.useState('');  
    const [password, setPassword] = useState("");
    const [referral,setReferral] = useState("")
    const [error, setErr] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [user, setUser] = useState("");
    const [flag,setFlag]=useState(false);

    // const [userData,setUserData]= useState({
    //     email:"",
    //     mobile:"",
    //     country:"",
    //     password:"",
    //     referral:"",

    // })

  
  
    useEffect(() => {
      validateForm();
    }, [email, password, mobile, country, referral]);
  
    const validateForm = () => {
      let errors = {};
  
      // Validate name field
      if (!mobile) {
        errors.mobile = "Mobile Number is required.";
      }else if(mobile.length !==10){
        errors.mobile = "Incorrect Mobile Number";
      }

      if(!country){
        errors.country="Country is Required"
      }
  
      // Validate email field
      if (!email) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
      }
  
      // Validate password field
      if (!password) {
        errors.password = "Password is required.";
      } 
      else if (
        !/[!@#$%^&*(),.?":{}|<>]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password)
      ) {
        errors.password =
          "Password must contain at least one special character, one uppercase letter, and one number.";
      }
  
      // Set the errors and update form validity
      setErr(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    };
  
    const handleSubmit = async() => {
    
      if (isFormValid) {
        


      
        const userData= {
            email:email,
             mobile:mobile,
            country:country,
            password:password,
            referral:referral,
        }
        console.log("userData",userData,email)
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData))
            register()
            // navigation.navigate("Home")
          } catch (e) {
             console.log("error",e)
          }
         
      } else {
          setFlag(true)
        // alert("Registration form has errors. Please correct them.");
      }
    };
  
    return (
      <View style={{backgroundColor:"white"}}>
           <ImageBackground source={require("../assets/bg9.png")} style={{width:width,height:height,alignItems:"center"}}>
            <ScrollView>
          <View style={{marginTop:10,width:width,alignItems:"center"}}>
            <Image style={styles.img} source={require("../assets/logo.png")} />
          </View>
  
          <KeyboardAvoidingView>

            <View style={{width:width,alignItems:"center"}}>


            <View style={{ alignItems: "center" }}>
              <Text style={styles.heading}>Register to your Account</Text>
            </View>




            <View style={{marginTop:20 }}>
                <View style={styles.inputBoxCont}>
                <Ionicons name="call"    
                   size={24}
                  color="black"
                  style={{ marginLeft: 8 }}/>
  
                <TextInput
                  value={mobile}
                  keyboardType="numeric"
                  onChangeText={(text) => setMobile(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: mobile ? 16 : 16,
                  }}
                  placeholder="Enter mobile number"
                />
              </View>
              {error.mobile && flag && <Text style={{color:"red"}}>{error.mobile}</Text>}
            </View>

            <View>
                <View style={styles.inputBoxCont}>
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="email"
                  size={24}
                  color="black"
                />
  
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="enter your Email"
                />
              </View>
              {error.email && flag && <Text style={{color:"red"}}>{error.email}</Text>}
            </View>
          
        
            <View >
              <View style={styles.inputBoxCont}>
              <Fontisto name="world" size={24} 
                  color="black"
                  style={{ marginLeft: 8 }}
            />
                <TextInput
                  value={country}
                  onChangeText={(text) => setCountry(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: country ? 16 : 16,
                  }}
                  placeholder="Country"
                />


  
              </View>
  
              {error.country  && flag && <Text style={{color:"red"}}>{error.country}</Text>}
              </View>


        
              <View>
              <View style={styles.inputBoxCont}>
            
                {
                    hidePass ?   <Entypo name="eye-with-line" onPress={()=>setHidePass(!hidePass)}  size={24}   color="black"
                    style={{ marginLeft: 8 }} />: <Entypo name="eye" onPress={()=>setHidePass(!hidePass)} size={24} color="black"  style={{ marginLeft: 8 }} />
                 
                }
               
  
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={hidePass ? true : false}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="enter your Password"
                />
              </View>
              {error.password && flag && <Text style={{color:"red"}}>{error.password}</Text>}
            </View>
  
         
             
  
            <View>
                <View style={styles.inputBoxCont}>
              <Ionicons name="send"   style={{ marginLeft: 8 }}
                  size={24}
                  color="black"
                />
  
                <TextInput
                  value={referral}
                  keyboardType="numeric"
                  onChangeText={(text) => setReferral(text)}
                  style={{
                    color: "black",
                    marginVertical: 10,
                    width: 300,
                    fontSize: referral ? 16 : 16,
                  }}
                  placeholder="Referral Code"
                />
              </View>
              {error.referral && flag && <Text style={{color:"red"}}>{error.referral}</Text>}
            </View>
  
      
            <View style={styles.forgotCont}>
              {/* <Text>Keep me logged in</Text> */}
  
              <Text style={{ color: "#f01c8b", fontWeight: "900" }}>
                Forgot Password?
              </Text>
            </View>
  
            <View style={{ marginTop: 40 }} />
  
            <Pressable style={styles.button}
                
                  onPress={handleSubmit}
                 
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
            </Pressable>
  
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "black", fontSize: 16,fontWeight:800 }}>
                Already have an account? Sign In
              </Text>
            </Pressable>

            </View>
          </KeyboardAvoidingView>
          </ScrollView>
          </ImageBackground> 
    
      </View>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
  
    img: {
      width: 120,
      height: 80,
      resizeMode:"contain"
    },
    heading: {
      fontSize: 17,
      fontWeight: "bold",
      marginTop: 10,
      color: "#041E42",
    },
    inputBoxCont: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: "#90e0ef",
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 20,
   
    },
    forgotCont: {
      marginTop: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      width: 200,
      backgroundColor: "#f01c8b",
      borderRadius: 6,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 15,
    },
  });
  