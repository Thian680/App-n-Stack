import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text} from "react-native";
import React from 'react';
import Homepage from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Friends from '../pages/Friends';
import { Ionicons } from "@expo/vector-icons";

const BottomNav = () => {
    const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Friends") {
            iconName = focused ? "people" : "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "blue", // color of the selected tab (icon and label)
        tabBarInactiveTintColor: "blue", // color of the other tabs (icon and label)

        tabBarStyle: {
          backgroundColor: "white",
          overflow: "hidden",
          height: 65,
          borderTopWidth: 3,
          borderTopColor: "darkblue",
        },

        headerStyle: {
          borderBottomColor: "darkblue",
          borderBottomWidth: 3,
          backgroundColor: "white",
        },

        headerTintColor: "blue",
        headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
        headerTitleAlign: "center",
      })}
    >
      <Tabs.Group>
        <Tabs.Screen name="Home" component={Homepage} />
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen
          name="Friends"
          component={Friends}
          options={{ tabBarBadge: 1 }}
        />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Group>
    </Tabs.Navigator>
  );
}

const style = StyleSheet.create({

});

export default BottomNav;