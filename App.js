import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AboutNavigation from "./Screen/drawer/AboutNavigation";
import Sidebar from "./Screen/drawer/Sidebar";
// import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <Sidebar />
      {/* <AboutNavigation /> */}
    </>
  );
}
