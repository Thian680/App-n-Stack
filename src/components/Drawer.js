import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Homepage from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Friends from "../pages/Friends";
import { StyleSheet, View, Text, Image } from "react-native";
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer} 
    >
      <View>
        <Image source={require("../../assets/ian.jpg")} style={styles.avatar} />
        <View style={styles.userInfoTextContainer}>
          <Text style={styles.userNameText}>Ian Bryle Monsalud</Text>
          <Text style={styles.userEmailText}>ianmonsalud@gmail.com</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#ff7518", 
          borderBottomWidth: 3,
          borderBottomColor: "#6a0dad", 
        },
        headerTintColor: "#2b0a3d",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        drawerActiveTintColor: "#ffd23f", 
        drawerActiveBackgroundColor: "#6a0dad", 
        drawerInactiveTintColor: "#9be564",
        drawerStyle: {
          backgroundColor: "#1a0b2e",
          width: 240,
          borderRightWidth: 3,
          borderRightColor: "#ff7518", 
        },
      }}
    >
      <Drawer.Screen name="Home" component={Homepage} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Friends" component={Friends} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    paddingTop: 0,
  },

  profileSummaryContainer: {
    backgroundColor: "#2b0a3d", 
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ff7518",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35, 
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 3,
    borderColor: "#ff7518", 
  },
  userInfoTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 5,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#6a0dad",   
  },
  
  userNameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff9a3c", 
    textAlign: "center",
    marginTop: 8,
  },
  userEmailText: {
    fontSize: 16,
    color: "#9be564", 
    marginTop: 2,
    textAlign: "center",
    fontWeight: 'bold'
  },
});

export default Drawer;
