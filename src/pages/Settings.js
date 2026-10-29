import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Settings = ({ route }) => {
  const navigation = useNavigation();
    const { name, age, number } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      {/* <Text style={styles.h2}>Info passed from page 2</Text>
      <Text style={styles.text}>Passed Name: {name}</Text>
      <Text style={styles.text}>Passed Age: {age}</Text>
      <Text style={styles.text}>Passed Number: {number}</Text> */}
      <Pressable
              onPress={() => navigation.navigate("Home")}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#f18181" : "crimson",
                padding: 12,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: "red",
              })}
            >
              <Text style={styles.bt}>Go back to Home</Text>
            </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  h2: {
    margin: 10,
  },

  text: {
    fontWeight: 600,
    textAlign: "start",
    padding: 10,
  },

  bt: {
    color: "white",
    fontWeight: "900",
  },
});
