import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Quiz from "../Screens/Quiz";
import Referral from "../Screens/Referral";
import Wallet from "../Screens/Wallet";
import Login from "../Screens/Login";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import Result from "../Screens/Result";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#41b7d1" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
              ),
          }}
        />
         {/* <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user-alt" size={24} color="#41b7d1" />
                ) : (
                  <FontAwesome5 name="user-alt" size={24} color="gray" />
              ),
          }}
        /> */}

        <Tab.Screen
          name="Quiz To Earn"
          component={Quiz}
          options={{
            headerShown:false,
            tabBarLabel: "Quiz To Earn",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="quiz" size={24} color="#41b7d1" />
              ) : (
                <MaterialIcons name="quiz" size={24} color="gray" />
              ),
          }}
        />

       
        {/* <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: "Wallet",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="wallet-sharp" size={24} color="#41b7d1" />
              
              ) : (
                <Ionicons name="wallet-sharp" size={24} color="gray" />
              ),
          }}
        /> */}
          <Tab.Screen
          name="Referral"
          component={Referral}
          options={{
            tabBarLabel: "Referral",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="send" size={24} color="#41b7d1" />
              
              ) : (
                <Ionicons name="send" size={24} color="gray" />
              ),
          }}
        />
          <Tab.Screen
          name="Login"
          component={Login}
          options={{
          
            tabBarLabel: "Login",
            tabBarLabelStyle: { color: "#f01c8b",fontSize:12 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="login" size={24} color="#41b7d1" />
              
              ) : (
                <AntDesign name="login" size={24} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        /> */}
        
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
   <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />

       <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
  
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});