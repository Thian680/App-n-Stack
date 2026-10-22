import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Settings = ({ route }) => {
  const navigation = useNavigation();
    const { name, age, number } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.h2}>Info passed from page 2</Text>
      <Text style={styles.text}>Passed Name: {name}</Text>
      <Text style={styles.text}>Passed Age: {age}</Text>
      <Text style={styles.text}>Passed Number: {number}</Text>
      <Button onPress={() => navigation.popToTop()} title="Go back home"/>
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
  },

  h2: {
    margin: 10,
  },

  text: {
    fontWeight: 600,
    textAlign: "start",
    padding: 10,
  },
});
