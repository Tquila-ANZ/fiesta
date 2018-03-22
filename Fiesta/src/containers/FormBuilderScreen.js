import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// Import fiesta via adding and running each component from the package.json
// import { FiestaFormBuilder } from "../../fiesta-packages/tq-anz-form-builder";

class FormBuilderScreen extends Component {
  render() {
    return <View>{/* <FiestaFormBuilder /> */}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
export default FormBuilderScreen;
