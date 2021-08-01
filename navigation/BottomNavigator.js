import React from "react";
import { Image, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RankingScreen from "../screens/RankingScreen";
import ForumScreen from "../screens/ForumScreen";
import ChatsScreen from "../screens/ChatsScreen";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ff66aa"
      inactiveColor="#8f8f8f"
      barStyle={{ backgroundColor: "#19181c" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/Home_Icon.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/Ranking_Icon.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          tabBarLabel: "Forum",
          tabBarIcon: ({ color }) => (
            {},
            (
              <Image
                source={require("../assets/icons/Forum_Icon.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: color,
                }}
              />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/Chats_Icon.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
