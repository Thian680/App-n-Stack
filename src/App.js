import { StyleSheet } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./pages/Navigation";
import BottomNav from './components/BottomNav';
import Drawer from './components/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      {/* <BottomNav/>   */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
