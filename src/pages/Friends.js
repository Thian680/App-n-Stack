import { StyleSheet, View, Text, TextInput, Pressable, Button, Image} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Friends = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Friends Screen!</Text>

      <View style={styles.card}>
        <Image style={styles.img} source={require("../../assets/erica.jpg")} />
        <Text style={styles.name}>Name: Erica Mae Baron</Text>
        <Text style={styles.text}>Age: 18</Text>
        <Text style={styles.text}>Email: ericabaron@gmail.com</Text>
        <Text style={styles.text}>
          Bio: Living the life of being alive and absorbing the power of the sun.
        </Text>
      </View>

      <Pressable
            onPress={() => navigation.navigate("Home")}
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#5b64e0" : "blue",
              padding: 12,
              borderRadius: 8,
              borderWidth: 3,
              borderColor: "blue",
            })}
          >
            <Text style={styles.bt}>Go back to Home</Text>
        </Pressable>
    </View>
  );
};

export default Friends;

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

  card: {
    backgroundColor: "#9d43d1",
    padding: 20,
    borderRadius: 20,
    margin: 30,
  },

  name: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#f4f4f4",
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },

  text: {
    marginLeft: 30,
    fontWeight: 500,
    marginRight: 30,
    color: "#f4f4f4",
  },

  bt: {
    color: "white",
    fontWeight: "900",
  },
});
