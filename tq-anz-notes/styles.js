'use strict';
import React, { Component } from "react";
import { StyleSheet } from "react-native";

const styleTypes = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    inputsContainer: {
      flex: 1,
      marginLeft: 6,
      marginRight: 6
    },
    fullWidthButton: {
      backgroundColor: "#00aec7",
      height: 70,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    fullWidthButtonText: {
      fontSize: 24,
      color: "white"
    }
  });
export default styleTypes;