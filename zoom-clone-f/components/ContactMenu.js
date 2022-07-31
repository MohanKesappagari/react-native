import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactMenuButtons = [
  {
    type: "starred",
    name: "starred",
  },
  {
    type: "contact",
    name: "mohan",
    photo: require("../assets/face.jpg"),
  },
  {
    type: "contact",
    name: "mohank",
    photo: require("../assets/face.jpg"),
  },
];

function ContactMenu() {
  return (
    <View style={styles.container}>
      {contactMenuButtons.map((val, index) => (
        <View style={styles.row} key={index}>
          {val.type === "starred" ? (
            <View style={styles.icon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={val.photo} style={styles.image} />
          )}

          <Text style={styles.text}>{val.name}</Text>
        </View>
      ))}
    </View>
  );
}

export default ContactMenu;

const styles = StyleSheet.create({
  container: {},
  icon: {
    backgroundColor: "#333",
    width: 55,
    height: 55,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },

  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
