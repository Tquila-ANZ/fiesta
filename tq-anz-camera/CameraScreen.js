import React, { PureComponent } from "react";
import { Alert, View, Text } from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";

class CameraScreen extends PureComponent {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  render() {
    const {
      actions = { rightButtonText: "Done", leftButtonText: "Cancel" },
      onBottomButtonPressed = this.onBottomButtonPressed,
      flashImages = {
        on: require("./images/flashOn.png"),
        off: require("./images/flashOff.png"),
        auto: require("./images/flashAuto.png")
      },
      otherImages = {
        flip: require("./images/cameraFlipIcon.png"),
        button: require("./images/cameraButton.png")
      }
    } = this.props;

    return (
      <CameraKitCameraScreen
        actions={actions}
        onBottomButtonPressed={onBottomButtonPressed}
        flashImages={flashImages}
        cameraFlipImage={otherImages.flip}
        captureButtonImage={otherImages.button}
      />
    );
  }
}

export default CameraScreen;
