import React, { Component } from "react";

import { CameraKitGalleryView } from "react-native-camera-kit";

import CameraScreen from "./CameraScreen";

export default class GalleryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: this.props.albumName,
      images: {},
      shouldRenderCameraScreen: false
    };
  }

  onTapImage = event => {
    const uri = event.nativeEvent.selected;
    const { images } = this.state;
    console.log("Tapped on an image: " + uri);

    if (images[uri]) {
      delete images[uri];
    } else {
      images[uri] = true;
    }
    this.setState({ images });
  };

  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    const { shouldRenderCameraScreen, album, images } = this.state;
    const {
      minimumInteritemSpacing = 10,
      minimumLineSpacing = 10,
      onSelected = () => {},
      onTapImage = e => this.onTapImage(e),
      selection = {
        selectedImage: require("./images/selected.png"),
        imagePosition: "bottom-right",
        imageSizeAndroid: "large",
        enable: Object.keys(images).length < 3
      },
      fileTypeSupport = {
        supportedFileTypes: ["image/jpeg"],
        unsupportedOverlayColor: "#00000055",
        unsupportedImage: require("./images/unsupportedImage.png"),
        //unsupportedText: 'JPEG!!',
        unsupportedTextColor: "#ff0000"
      },
      customButtonStyle = {
        image: require("./images/openCamera.png"),
        backgroundColor: "#06c4e9"
      },
      onCustomButtonPress = () => {
        this.setState({ shouldRenderCameraScreen: true });
      }
    } = this.props;

    if (shouldRenderCameraScreen) {
      return <CameraScreen />;
    }

    return (
      <CameraKitGalleryView
        ref={gallery => {
          this.gallery = gallery;
        }}
        style={styles.container}
        albumName={album}
        minimumInteritemSpacing={minimumInteritemSpacing}
        minimumLineSpacing={minimumLineSpacing}
        columnCount={3}
        selectedImages={Object.keys(images)}
        onSelected={onSelected}
        onTapImage={onTapImage}
        selection={selection}
        fileTypeSupport={fileTypeSupport}
        customButtonStyle={customButtonStyle}
        onCustomButtonPress={onCustomButtonPress}
      />
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "#ffffff",
    marginTop: 50
  }
};
