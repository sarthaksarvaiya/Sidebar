import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
// import phone from "./componet/Phone";
import Testq from "./Testq";
import About from "./About";
import phone from "./componet/Phone";

const Stack = createStackNavigator();

const AboutNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false, headerMode: "Screen" }}
        ></Stack.Screen>
        <Stack.Screen name="Testq" component={Testq}></Stack.Screen>
        <Stack.Screen
          name="Phone"
          component={phone}
          options={{ headerMode: "Screen" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AboutNavigation;
