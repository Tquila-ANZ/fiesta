import React, { Component } from "react";
import { Text, View, TouchableOpacity, AlertIOS } from "react-native";

import { CameraKitCamera, CameraKitGallery } from "react-native-camera-kit";

import CameraScreen from "./CameraScreen";
import GalleryScreen from "./GalleryScreen";

export { default as CameraScreen } from "./CameraScreen.js";
export { default as GalleryScreen } from "./GalleryScreen.js";
export { default as GalleryModal } from "./GalleryModal.js";

export default class CameraSample extends Component {
  onCheckCameraAuthoPressed = async () => {
    const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
    if (success) {
      AlertIOS.alert("You have permission 🤗");
    } else {
      AlertIOS.alert("No permission 😳");
    }
  };

  onCheckGalleryAuthoPressed = async () => {
    const success = await CameraKitGallery.checkDevicePhotosAuthorizationStatus();
    if (success) {
      AlertIOS.alert("You have permission 🤗");
    } else {
      AlertIOS.alert("No permission 😳");
    }
  };

  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome to Camera Kit</Text>
          <Text style={{ fontSize: 40 }}>📷</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.setState({ example: CameraScreen })}
          >
            <Text style={styles.buttonText}>Camera Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ example: GalleryScreen })}
          >
            <Text style={styles.buttonText}>Gallery Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onCheckCameraAuthoPressed}>
            <Text style={styles.buttonText}>Camera Autotization Status</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onCheckGalleryAuthoPressed}>
            <Text style={styles.buttonText}>Photos Autotization Status</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerContainer: {
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
  },
  headerText: {
    color: "black",
    fontSize: 24
  },
  buttonText: {
    color: "blue",
    marginBottom: 20,
    fontSize: 20
  }
};
