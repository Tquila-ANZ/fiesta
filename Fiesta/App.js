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

        <FiestaSuperGrid />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
