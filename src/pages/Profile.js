import { StyleSheet, Text, View, Button, Image, Pressable} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = ({ route }) => {
  const navigation = useNavigation();

  // const { name, age, number } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Profile page</Text>

      <View style={styles.card}>
        <Image style={styles.img} source={require("../../assets/ian.jpg")} />
        <Text style={styles.name}>Name: Ian Bryle Monsalud</Text>
        <Text style={styles.text}>Age: 18</Text>
        <Text style={styles.text}>Email: ianmonsalud@gmail.com</Text>
        <Text style={styles.text}>
          Bio: Welcome to our platform. This is a very short description
        </Text>
      </View>
      {/* <Text style={styles.h2}>Info passed from page 1</Text>
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

  card: {
    backgroundColor: "#00f798",
    padding: 20,
    borderRadius: 20,
    margin: 30,
  },

  name: {
    fontWeight: "bold",
    textAlign: "center",
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20
  },

  text: {
    marginLeft: 30,
    fontWeight: 500,
    marginRight: 30,
  },

  bt: {
    color: 'white',
    fontWeight: '900'
  }
});
