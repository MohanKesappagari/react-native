import React from "react";

import { SafeAreaView, StyleSheet, View } from "react-native";
import ContactMenu from "../components/ContactMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SerachBar from "../components/SerachBar";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <SerachBar />
        <MenuButtons navigation={navigation} />
        <ContactMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 10,
  },
});
