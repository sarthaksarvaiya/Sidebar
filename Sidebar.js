import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import About from "./About";
import { createStackNavigator } from "@react-navigation/stack";
import phone from "./componet/Phone";
import Testq from "./Testq";
import AboutNavigation from "./AboutNavigation";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Sidebar = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen key="home" name="Home" component={Home} />
        <Drawer.Screen key="about" name="About11" component={AboutNavigation} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Testq" component={Testq}></Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Sidebar;
