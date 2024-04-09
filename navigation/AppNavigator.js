import {
    View,
    Text,
    Button,
    Pressable,
    FlatList,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Quiz from "../Screens/Quiz";
import Referral from "../Screens/Referral";
import Wallet from "../Screens/Wallet";
import Login from "../Screens/Login";
import Result from "../Screens/Result";
import Terms from "../Screens/Terms";
import Privacy from "../Screens/Privacy";
import Faq from "../Screens/Faq";



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = () => {



    const drawerMenu = [

        {
            id: 1,
            name: "My Profile",
            url: "Profile",
            icon: <FontAwesome name="user" size={24} color="white" />,
        },
        {
            id: 4,
            name: "Referral",
            url: "Referral",
            icon: <FontAwesome name="send" size={22} color="white" />,
        },

        {
            id: 2,
            name: "Quiz To Earn",
            url: "Quiz To Earn",
            icon: <MaterialCommunityIcons name="head-question" size={30} color="white" />,
        },

        {
            id: 3,
            name: "Wallet",
            url: "Wallet",
            icon: <Ionicons name="wallet" size={24} color="white" />,
        },
        {
            id: 5,
            name: "Terms & Conditions",
            url: "Terms",
            icon: <Foundation name="clipboard-pencil" size={24} color="white" />,
        },
        {
            id: 6,
            name: "Privacy Policy",
            url: "Privacy",
            icon: <MaterialIcons name="security" size={24} color="white" />,
        },
        {
            id: 7,
            name: "FAQ",
            url: "Faq",
            icon: (
                <MaterialCommunityIcons
                    name="comment-question-outline"
                    size={24}
                    color="white"
                />
            ),
        },





    ];



    function StackNavigator() {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
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

                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Terms"
                    component={Terms}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Privacy"
                    component={Privacy}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Faq"
                    component={Faq}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        );
    }

    const DrawerContent = ({ navigation }) => {
        const [submenuVisible, setSubmenuVisible] = useState(false);

        const toggleSubmenu = () => {
            setSubmenuVisible(!submenuVisible);
        };
        return (
            <ScrollView style={{ flex: 1, paddingTop: 10 }}>
                <Entypo
                    name="cross"
                    size={35}
                    color="white"
                    onPress={() => navigation.closeDrawer()}
                    style={{ marginLeft: 10 }}
                />
                <View style={{ alignItems: "center", marginTop: 30 }}>
                    <FlatList
                        keyExtractor={(item) => item.id.toString() + item.name}

                        data={drawerMenu}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View
                                key={item.id}
                                style={{ justifyContent: "center", gap: 5, padding: 5 }}
                            >
                                {item.submenu ? (
                                    <>
                                        <TouchableOpacity
                                            onPress={toggleSubmenu}
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                padding: 15,
                                                gap: 12,
                                            }}
                                        >
                                            {item.icon}
                                            <Text allowFontScaling={false} style={{ fontSize: 17, color: "white" }}>
                                                {item.name}
                                            </Text>
                                            <View style={{ marginLeft: 10 }}>
                                                {item.dropdownIcon}
                                            </View>
                                        </TouchableOpacity>
                                        {submenuVisible && (
                                            <View style={styles.submenu}>
                                                {item.submenu.map((subitem) => (
                                                    <TouchableOpacity
                                                        key={subitem.id}
                                                        onPress={() => navigation.navigate(subitem.url)}
                                                        style={{
                                                            flexDirection: "row",
                                                            alignItems: "center",
                                                            padding: 15,
                                                            gap: 12,
                                                        }}
                                                    >
                                                        <AntDesign
                                                            name="arrowright"
                                                            size={24}
                                                            color="white"
                                                        />
                                                        <Text allowFontScaling={false} style={{ fontSize: 15, color: "white" }}>
                                                            {subitem.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        )}
                                    </>
                                ) : (
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            padding: 15,
                                            gap: 12,
                                        }}
                                        onPress={() => {
                                            item.name == "Logout"
                                                ? handleLogout()

                                                // onShare(
                                                //   `https://expo.dev/artifacts/eas/5ua1tSJD4RS22HLuiVNHzJ.apk`
                                                // )
                                                :
                                                navigation.navigate(item.url);
                                        }}
                                    >
                                        {item.icon}
                                        <Text allowFontScaling={false} style={{ fontSize: 17, color: "white" }}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}

                                <Text allowFontScaling={false}
                                    style={{
                                        height: 1,
                                        borderColor: "#ffe4c4",
                                        borderWidth: 0.2,
                                        marginTop: 0,
                                    }}
                                />
                            </View>
                        )}


                    />
                </View>
            </ScrollView>
        );
    };

    const BottomNavigator = () => {


        return (
            <Tab.Navigator
                screenOptions={{ tabBarStyle: { elevation: 15, height: 65, borderTopWidth: 1, backgroundColor: "#fff", opacity: 0.6 } }}

            >

                <Tab.Screen
                    name="Home"
                    component={StackNavigator}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "#f01c8b", fontSize: 15, marginBottom: 5 },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <Entypo name="home" size={28} color="#41b7d1" />
                                <MaterialCommunityIcons name="home-circle" size={38} color="#41b7d1" />
                            ) : (
                                // <AntDesign name="home" size={28} color="gray" />
                                <MaterialCommunityIcons name="home-circle-outline" size={38} color="gray" />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Quiz To Earn"
                    component={Quiz}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Quiz To Earn",
                        tabBarLabelStyle: { color: "#f01c8b", fontSize: 15, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <MaterialIcons name="quiz" size={30} color="#41b7d1" />
                                <MaterialCommunityIcons name="head-question" size={34} color="#41b7d1" />
                            ) : (
                                // <MaterialIcons name="quiz" size={30} color="gray"/>
                                <MaterialCommunityIcons name="head-question-outline" size={28} color="gray" />
                            ),
                    }}
                />


                <Tab.Screen
                    name="Referral"
                    component={Referral}
                    options={{
                        tabBarLabel: "Referral",
                        tabBarLabelStyle: { color: "#f01c8b", fontSize: 15, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <Ionicons name="send" size={28} color="#41b7d1" />
                                <MaterialCommunityIcons name="send-circle" size={38} color="#41b7d1" />

                            ) : (
                                // <Ionicons name="send" size={28} color="gray" />
                                <MaterialCommunityIcons name="send-circle-outline" size={38} color="gray" />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{

                        tabBarLabel: "Login",
                        tabBarLabelStyle: { color: "#f01c8b", fontSize: 15, marginBottom: 5 },
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                // <AntDesign name="login" size={28} color="#41b7d1" />
                                <FontAwesome name="sign-in" size={28} color="#41b7d1" />

                            ) : (
                                // <AntDesign name="login" size={28} color="gray" />
                                <FontAwesome name="sign-in" size={28} color="gray" />
                            ),
                    }}
                />
            </Tab.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "#ffafcc",
                        width: 240,
                        opacity: 0.8
                    },
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Home"
                    component={BottomNavigator}
                    options={{ headerShown: false }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    drawerItem: {
        padding: 10,

    },
    submenu: {
        borderColor: "#ffe4c4",
        borderTopWidth: 0.2,
    },
    submenuItem: {
        padding: 10,

    },
});

export default AppNavigator;