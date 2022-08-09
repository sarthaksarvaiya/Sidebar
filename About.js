import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";

import Phone from "../drawer/componet/Phone";
import Testq from "./Testq";

import { AntDesign } from "@expo/vector-icons";
import phone from "../drawer/componet/Phone";
import AboutNavigation from "./AboutNavigation";

// interface LoginScreenProps {
//   navigation: any;
// }

export default function About({ navigation }) {
  const [data, setData] = useState({
    data: [
      {
        id: 1,
        name: "Apple iPhone 11 (Black, 64 GB)",
        price: "10.00 $",
        image:
          "https://rukminim1.flixcart.com/image/832/832/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
      },
      {
        id: 2,
        name: "Apple iPhone 11 (Black, 64 GB)",
        price: "10.00 $",
        image:
          "https://rukminim1.flixcart.com/image/832/832/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
      },
      {
        id: 3,
        name: "Apple iPhone 11 (Black, 64 GB)",
        price: "10.00 $",
        image:
          "https://rukminim1.flixcart.com/image/832/832/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
      },
      {
        id: 4,
        name: "Apple iPhone 11 (Black, 64 GB)",
        price: "10.00 $",
        image:
          "https://rukminim1.flixcart.com/image/832/832/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
      },
    ],
  });

  // clickEventListener({item})

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data.data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={
                () => navigation.navigate("Testq")

                // this.clickEventListener(item);
              }
            >
              {/* <AboutNavigation /> */}
              <AntDesign name="heart" size={24} color="black" />
              <Image style={styles.userImage} source={{ uri: item.image }} />
              <View style={styles.cardFooter}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => navigation.navigate("Phone")}
                  >
                    <Text style={styles.followButtonText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <AboutNavigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 5,
    backgroundColor: "white",
    flexBasis: "46%",
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 250,
    width: 180,
    alignSelf: "center",
    borderColor: "#DCDCDC",
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#008080",
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
    fontWeight: "bold",
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
