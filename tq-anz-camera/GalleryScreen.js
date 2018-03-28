import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import {
  CameraKitCamera,
  CameraKitGalleryView,
  CameraKitGallery
} from "react-native-camera-kit";

export default class GalleryScreen extends PureComponent {
  state = {
    selectedImages: []
  };

  onTapImage = async event => {
    const { selectedImages } = this.state;
    const isSelected = event.nativeEvent.isSelected;
    const image = await CameraKitGallery.getImageForTapEvent(event.nativeEvent);

    selectedImages.push(image);
    console.log(selectedImages);
    this.setState({
      selectedImages
    });
  };

  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    const {
      album = "",
      minimumInteritemSpacing = 10,
      minimumLineSpacing = 10,
      columnCount = 3,
      remoteDownloadIndicatorType = "progress-pie", //spinner / progress-bar / progress-pie
      remoteDownloadIndicatorColor = "white"
    } = this.props;

    return (
      <View style={styles.container}>
        <CameraKitGalleryView
          style={styles.gallery}
          albumName={album}
          minimumInteritemSpacing={minimumInteritemSpacing}
          minimumLineSpacing={minimumLineSpacing}
          columnCount={columnCount}
          selection={{
            imagePosition: "top-right"
          }}
          onTapImage={this.onTapImage}
          remoteDownloadIndicatorType={remoteDownloadIndicatorType}
          remoteDownloadIndicatorColor={remoteDownloadIndicatorColor}
        />
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1
  },
  gallery: { flex: 1, margin: 0, marginTop: 50 }
};
