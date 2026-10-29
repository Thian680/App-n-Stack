import { StyleSheet, View, Text, TextInput, Pressable} from "react-native";
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  // const navigation = useNavigation();

  // const [info_name, setName] = useState("");
  // const [info_age, setAge] = useState("");
  // const [info_number, setNumber] = useState("");
  // const [isHovered, setHovered] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Welcome to Home Screen!</Text>
      {/* <Text>Enter Info Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={info_name}
        onChangeText={setName}
        maxLength={25}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={info_age}
        onChangeText={setAge}
        maxLength={3}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={info_number}
        onChangeText={setNumber}
        keyboardType="number-pad"
        maxLength={11}
      />

      <Pressable
        style={styles.button}
        onHoverIn={() => setHovered(true)}
        onPressIn={() =>
          navigation.navigate("Profile", {
            name: info_name,
            age: info_age,
            number: info_number,
          })
        }
      >
        <Text>Go to Profile</Text>
      </Pressable> */}
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
    fontWeight: 'bold',
  },

  input: {
    padding: 10,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth:2,
    borderColor: 'black',
    margin: 5
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'red',
  }
});
