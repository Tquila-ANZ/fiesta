import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

//------------------------------------------- Fiesta
import FiestaSuperGrid from "./fiesta-packages/tq-anz-super-grid";

//--------------------------------------------------

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const gridItems = [
  { name: "CAMERA", code: "#f9521f" },
  { name: "FORM BUILDER", code: "#f9521f" },
  { name: "SUPER GRID", code: "#f9521f" },
  { name: "COPYRIGHT", code: "#f9521f" },
  { name: "CHAT", code: "#f9521f" },
  { name: "AVATAR", code: "#f9521f" },
  { name: "BUTTON", code: "#f9521f" },
  { name: "CACHE", code: "#f9521f" },
  { name: "ACCORDION", code: "#f9521f" },
  { name: "CUSTOMER DETAILS", code: "#f9521f" },
  { name: "DETAILS", code: "#f9521f" },
  { name: "LOADING MODEL", code: "#f9521f" },
  { name: "MAP", code: "#f9521f" },
  { name: "NAVIGATION", code: "#f9521f" },
  { name: "NOTES", code: "#f9521f" },
  { name: "OFFLINE", code: "#f9521f" },
  { name: "PICKER", code: "#f9521f" },
  { name: "RADIO BUTTON", code: "#f9521f" },
  { name: "RADIO IMAGE BUTTON", code: "#f9521f" },
  { name: "SELECT DROP DOWN", code: "#f9521f" }
];
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("./src/assets/tquila-anz-logo_LG.jpg")}
          />
        </View>
        <Text style={styles.welcome}>Welcome to fiesta!</Text>
        <FiestaSuperGrid gridItems={gridItems} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    top: 20,
    width: 320,
    resizeMode: "contain"
  }
});
