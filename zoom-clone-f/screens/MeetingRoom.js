import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#767476"
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            placeholder="Enter RoomId"
            placeholderTextColor="#767476"
            style={styles.textInput}
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.startMeetingButton}
            onPress={() => {}}
          >
            <Text style={styles.text}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
    fontWeight: "700",
  },
  text: {
    color: "white",
  },
});
