import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-elements";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import TelaCadastro from "../screens/registerSensor";
import { View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";
import { Admin } from "../screens/Admin";
import { RegisterLocation } from "../screens/RegisterLocation";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs(){
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: "#3DB27A",
            },
            headerTitleStyle: {
              alignContent: "center",
              justifyContent: "center",
            },
            tabBarStyle: {
              backgroundColor: "#F0FFF8",
            },
          })}
        >
              <Tab.Screen
                name="Home"
                component={Home}
                options={({ route }) => ({
                  tabBarIcon: ({ focused }) => {
                    let iconColor;
    
                    if (route.name === "Home") {
                      iconColor = focused ? "#3DB27A" : "black";
                    }
                    return (
                      <Ionicons
                        style={{ color: iconColor }}
                        name="home"
                        size={23}
                      />
                    );
                  },
                  tabBarLabel: ({ focused }) => {
                    let iconColor;
    
                    if (route.name === "Home") {
                      iconColor = focused ? "#3DB27A" : "black";
                    }
                    return (
                      <Text
                        style={{
                          color: iconColor,
                          fontSize: 15,
                          textAlign: "center",
                        }}
                      >
                        {route.name}
                      </Text>
                    );
                  },
                })}
              />
              <Tab.Screen
                name="Notification"
                component={Notification}
                options={({ route }) => ({
                  tabBarIcon: ({ focused }) => {
                    let iconColor;
    
                    if (route.name === "Notification") {
                      iconColor = focused ? "#3DB27A" : "black";
                    }
                    return (
                      <Ionicons
                        style={{ color: iconColor }}
                        name="notifications"
                        size={23}
                      />
                    );
                  },
                  tabBarLabel: ({ focused }) => {
                    let iconColor;
    
                    if (route.name === "Notification") {
                      iconColor = focused ? "#3DB27A" : "black";
                    }
                    return (
                      <Text
                        style={{
                          color: iconColor,
                          fontSize: 15,
                          textAlign: "center",
                        }}
                      >
                        {route.name}
                      </Text>
                    );
                  },
                })}
              />
              <Tab.Screen
                name="Admin"
                component={Admin}
                options={({ route }) => ({
                  tabBarIcon: ({ focused }) => {
                    let iconColor;
    
                    if (route.name === "Admin") {
                      iconColor = focused ? "#3DB27A" : "black";
                    }
                    return (
                      <View>
                        <Image source={require("../assets/sens.png")} />
                      </View>
                    );
                  },
                  tabBarLabel: ({ focused }) => {
                    let iconColor;
    
                    if (route.name === "Admin") {
                      iconColor = focused ? "#3DB27A" : "black";
                    }
                    return (
                      <Text
                        style={{
                          color: iconColor,
                          fontSize: 15,
                          textAlign: "center",
                        }}
                      >
                        {route.name}
                      </Text>
                    );
                  },
                })}
              />
        </Tab.Navigator>
      );
}

function Stacks() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen  name='--' component={HomeTabs} />
          <Stack.Screen name="Sensor" component={TelaCadastro} />
          <Stack.Screen name="Location" component={RegisterLocation}/>
        </Stack.Navigator>
      );
}
export default Stacks
const styles = StyleSheet.create({
  backgroundColor: "#F0FFF8",
});
