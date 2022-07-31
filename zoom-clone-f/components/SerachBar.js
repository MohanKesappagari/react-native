import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

function SerachBar() {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={styles.textSerachBar}>Serach</Text>
    </View>
  );
}

export default SerachBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
  },
  textSerachBar: {
    color: "#858585",
    paddingLeft: 10,
    fontSize: 10,
  },
});