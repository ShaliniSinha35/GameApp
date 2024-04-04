import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import HelpScreen from "../Screens/HelpScreen";
import BookingScreen from "../Screens/BookingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Screens/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CartScreen from "../Screens/CartScreen";




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
            tabBarLabelStyle: { color: "#FEBE10" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#00008b" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
         <Tab.Screen
          name="Booking & Plans"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            tabBarLabelStyle: { color: "#FEBE10" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="clipboard-text" size={24} color="#00008b" />
              ) : (
                <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#FEBE10" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#00008b" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />

       
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#FEBE10" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="shopping-cart" size={24} color="#00008b" />
              
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});