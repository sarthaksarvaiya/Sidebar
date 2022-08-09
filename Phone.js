import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Cardd from "./Cardd";

const phone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.com1}>
        <Image
          style={{ width: 30, height: 40 }}
          source={require("./img/img1.jpeg")}
        ></Image>
      </View>
    </View>
  );
};

export default phone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",

    // flexWrap: "wrap",
    // marginHorizontal: "10%",
  },
  com1: {
    flex: 1,
    margin: 20,
    // padding: 20,
  },
});
