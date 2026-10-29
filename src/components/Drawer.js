import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import Homepage from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Friends from "../pages/Friends";
import { StyleSheet, View, Text, Image} from "react-native";
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={StyleSheet.drawerContainer}
    >
      <View>
        <Image
          source={require('../../assets/ian.jpg')}
          style={styles.avatar}
        />
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
  return(
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: 'maroon'},
            headerTintColor: "white",
            headerTitleAlign: 'center',
            drawerActiveTintColor: 'red',
            drawerStyle: {backgroundColor: "#ffffff", width: 240}
        }}
     >
    <Drawer.Screen name="Home" component={Homepage} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name='Friends' component={Friends} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    paddingTop: 0,
  },
  profileSummaryContainer: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 30,
    alignSelf:'center'
  },
  userInfoTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 5,
    borderBottomWidth: 1,
  },
  userNameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212529",
    textAlign: "center",
  },
  userEmailText: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 2,
    textAlign: "center",
  },
});


export default Drawer;
