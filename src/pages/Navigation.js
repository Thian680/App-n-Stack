import { StyleSheet, Text, View, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Homepage from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";
import Friends from "./Friends";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "darkred" },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 22,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home sreen" component={Homepage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Friends" component={Friends} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
