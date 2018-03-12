import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import HomeScreen from "./src/containers/HomeScreen";
import CameraScreen from "./src/containers/CameraScreen";

//------------------------------------------- Fiesta
// import { StackNavigator } from "./fiesta-packages/tq-anz-navigation";
// import FiestaSuperGrid from "./fiesta-packages/tq-anz-super-grid";

//--------------------------------------------------

export default (App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Camera: {
      screen: CameraScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Camera"
      })
    }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      headerTintColor: "#f9521f",
      headerTitleStyle: {
        color: "#f9521f"
      },
      headerStyle: {
        backgroundColor: "#FFF"
      }
    }
  }
));
