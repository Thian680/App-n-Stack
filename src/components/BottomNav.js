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

          return <Ionicons name={iconName} size={size} />;
        },

        tabBarStyle: {
            backgroundColor: '#f5f5f5f5',
            overflow: 'hidden',
            height: 65,
            borderTopWidth: 2,
            borderTopColor: 'red',
        }
      })}
    >
      <Tabs.Group>
        <Tabs.Screen name="Home" component={Homepage} />
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name='Friends' component={Friends} options={{tabBarBadge:1}}/>
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Group>
    </Tabs.Navigator>
  );
}

const style = StyleSheet.create({

});

export default BottomNav;