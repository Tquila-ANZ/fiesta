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
    let { selectedImages } = this.state;
    const isSelected = event.nativeEvent.isSelected;
    const image = await CameraKitGallery.getImageForTapEvent(event.nativeEvent);

    if (isSelected) {
      selectedImages.push(image);
    } else {
      selectedImages = selectedImages.filter(
        i => i.selectedImageId !== image.selectedImageId
      );
    }

    this.setState({
      selectedImages
    });

    const { onTapImage = () => {} } = this.props;
    onTapImage(image);
  };

  onCancel = () => {
    const { onClose = () => {} } = this.props;
    this.setState({
      selectedImages: []
    });
    onClose();
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
      showCancelButton = true,
      cancelButtonText = "Cancel",
      closeButtonText = "Done",
      selectedImages = [],

      album = "",
      minimumInteritemSpacing = 5,
      minimumLineSpacing = 5,
      columnCount = 5,
      remoteDownloadIndicatorType = "progress-pie", //spinner / progress-bar / progress-pie
      remoteDownloadIndicatorColor = "white",
      selection = {
        selectedImage: require("./images/selected.png"),
        imagePosition: "bottom-right"
      },
      supportedOrientations = [
        "portrait",
        "portrait-upside-down",
        "landscape",
        "landscape-left",
        "landscape-right"
      ]
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
        supportedOrientations={supportedOrientations}
      >
        <View style={styles.container}>
          <CameraKitGalleryView
            style={styles.gallery}
            albumName={album}
            minimumInteritemSpacing={minimumInteritemSpacing}
            minimumLineSpacing={minimumLineSpacing}
            columnCount={columnCount}
            selection={selection}
            selectedImages={selectedImages}
            onTapImage={this.onTapImage}
            remoteDownloadIndicatorType={remoteDownloadIndicatorType}
            remoteDownloadIndicatorColor={remoteDownloadIndicatorColor}
          />

          <View style={styles.buttonsContainer}>
            {showCancelButton ? (
              <TouchableOpacity
                onPress={this.onCancel}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>{cancelButtonText}</Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity onPress={this.onClose} style={styles.closeButton}>
              <Text style={styles.buttonText}>{closeButtonText}</Text>
            </TouchableOpacity>
          </View>
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cancelButton: {
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
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
