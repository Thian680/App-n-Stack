import { StyleSheet, View, Text, TextInput, Pressable} from "react-native";
import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>
        Welcome to Home Screen!
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  h2: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "#a020f0",
    textShadowOffset: { width: 20, height: 20, },
  },

  input: {
    padding: 10,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "red",
  },
});
