import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = ({ route }) => {
  const navigation = useNavigation();

  const { name, age, number } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Profile page</Text>
      <Text style={styles.h2}>Info passed from page 1</Text>
      <Text style={styles.text}>Passed Name: {name}</Text>
      <Text style={styles.text}>Passed Age: {age}</Text>
      <Text style={styles.text}>Passed Number: {number}</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings",{
          name,
          age,
          number,
        })}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
});
