"use strict";
import React, { Component } from "react";
import { StyleSheet } from "react-native";

const styleTypes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  imageContainer: {
    width: 320,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  buttonsContainer: {
    flex: 1
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
    alignItems: "center",
    borderRadius: 10
  },
  fullWidthButtonText: {
    fontSize: 24,
    color: "white"
  },
  copyright: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12
  }
});
export default styleTypes;
