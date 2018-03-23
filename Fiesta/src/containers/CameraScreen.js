import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// Import fiesta via adding and running each component from the package.json
import FiestaCamera from "../../fiesta-packages/tq-anz-camera";

export default class CameraScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FiestaCamera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#F5FCFF"
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
  }
});
