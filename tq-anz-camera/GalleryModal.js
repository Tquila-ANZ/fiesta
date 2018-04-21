import React, { PureComponent } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import {
  CameraKitCamera,
  CameraKitGalleryView,
  CameraKitGallery
} from "react-native-camera-kit";

export default class GalleryModal extends PureComponent {
  state = {
    selectedImages: []
  };

  onTapImage = async event => {
    const { selectedImages } = this.state;
    const isSelected = event.nativeEvent.isSelected;
    const image = await CameraKitGallery.getImageForTapEvent(event.nativeEvent);

    selectedImages.push(image);
    this.setState({
      selectedImages
    });

    const { onTapImage = () => {} } = this.props;
    onTapImage(image);
  };

  onClose = () => {
    const { onClose = () => {} } = this.props;
    const { selectedImages } = this.state;
    this.setState({
      selectedImages: []
    });
    onClose(selectedImages);
  };

  render() {
    const {
      modalVisible = "false",
      animationType = "slide",
      transparent = false,
      onRequestClose = () => {},
      closeButtonText = "Done",

      album = "",
      minimumInteritemSpacing = 5,
      minimumLineSpacing = 5,
      columnCount = 5,
      remoteDownloadIndicatorType = "progress-pie", //spinner / progress-bar / progress-pie
      remoteDownloadIndicatorColor = "white",
      selection = {
        selectedImage: require("./images/selected.png"),
        imagePosition: "bottom-right"
      }
    } = this.props;

    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.container}>
          <CameraKitGalleryView
            style={styles.gallery}
            albumName={album}
            minimumInteritemSpacing={minimumInteritemSpacing}
            minimumLineSpacing={minimumLineSpacing}
            columnCount={columnCount}
            selection={selection}
            onTapImage={this.onTapImage}
            remoteDownloadIndicatorType={remoteDownloadIndicatorType}
            remoteDownloadIndicatorColor={remoteDownloadIndicatorColor}
          />

          <TouchableOpacity onPress={this.onClose} style={styles.closeButton}>
            <Text style={styles.buttonText}>{closeButtonText}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1,
    padding: 10
  },
  galleryContainer: {},
  gallery: { flex: 1, margin: 0, marginTop: 50 },
  closeButton: {
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600"
  }
};
