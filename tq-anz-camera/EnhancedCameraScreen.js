import React, { PureComponent } from "react";
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RNCamera } from "react-native-camera";

const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};

class Slider extends PureComponent {
  state = {
    position: new Animated.ValueXY(),
    containerSize: { height: 0, width: 0 },
    thumbSize: { height: 0, width: 0 },
    trackSize: { height: 0, width: 0 }
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.position.setOffset({
          x: this.state.position.x._value,
          y: this.state.position.y._value
        });
        this.state.position.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (evt, gestureState) => {
        const actualY = gestureState.dy + this.state.position.y._offset;
        const maximumHeight = this._trackSize.height - this._thumbSize.height;
        let y = gestureState.dy;

        if (actualY < 0) {
          y = 0 - this.state.position.y._offset;
        } else if (actualY > maximumHeight) {
          y = maximumHeight - this.state.position.y._offset;
        }
        this.state.position.setValue({ x: 0, y: y });
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.state.position.flattenOffset();
      }
    });
  }

  measureContainer = e => {
    this.handleMeasure("containerSize", e);
  };

  measureTrack = e => {
    this.handleMeasure("trackSize", e);
  };

  measureThumb = e => {
    this.handleMeasure("thumbSize", e);
  };

  addZoomListener = () => {
    const { position } = this.state;
    if (position) {
      position.addListener(value => {
        const {
          maximumValue = 1.0,
          minimumValue = 0,
          onChange = () => {},
          orientation = "up"
        } = this.props;
        const { thumbSize, trackSize } = this.state;

        if (trackSize && thumbSize) {
          const minimumHeight = 0;
          const maximumHeight = trackSize.height - thumbSize.height;

          let factor =
            value.y <= minimumHeight
              ? 0
              : value.y >= maximumHeight
                ? 1
                : (value.y - minimumHeight) / (maximumHeight - minimumHeight);
          if (orientation === "up") {
            factor = 1 - factor;
          }
          const interpolatedValue =
            minimumValue + factor * (maximumValue - minimumValue);
          const newValue = Math.min(
            Math.max(interpolatedValue, minimumValue),
            maximumValue
          );
          onChange(newValue);
        }
      });
    }
  };

  handleMeasure = async (name, e) => {
    const { width, height } = e.nativeEvent.layout;
    const size = { width, height };

    const storeName = `_${name}`;
    const currentSize = this[storeName];
    if (
      currentSize &&
      width === currentSize.width &&
      height === currentSize.height
    ) {
      return;
    }
    this[storeName] = size;

    if (
      this._containerSize &&
      this._trackSize &&
      this._thumbSize &&
      this.state.position
    ) {
      const {
        maximumValue = 1.0,
        minimumValue = 0,
        startValue = 0,
        orientation = "up"
      } = this.props;

      this.setState(
        {
          containerSize: this._containerSize,
          trackSize: this._trackSize,
          thumbSize: this._thumbSize
        },
        () => {
          const maximumHeight = this._trackSize.height - this._thumbSize.height;
          const startVal =
            startValue >= minimumValue && startValue <= maximumValue
              ? startValue
              : minimumValue;
          const factor =
            (startVal - minimumValue) / (maximumValue - minimumValue);
          let startHeight = factor * maximumHeight;
          if (orientation === "up") {
            startHeight = maximumHeight - startHeight;
          }
          this.state.position.setValue({
            x: 0,
            y: startHeight
          });
          this.addZoomListener();
        }
      );
    }
  };

  render() {
    const { position } = this.state;
    const [translateX, translateY] = [position.x, position.y];
    const panStyle = {
      transform: [{ translateX }, { translateY }]
    };

    return (
      <View>
        <View>
          <Text style={styles.zoomControlText}>+</Text>
        </View>
        <View
          style={styles.zoomControlTrackContainer}
          onLayout={this.measureContainer}
        >
          <View style={styles.zoomControlTrack} onLayout={this.measureTrack} />
          <Animated.View
            onLayout={this.measureThumb}
            style={[panStyle, styles.zoomControlThumb]}
          >
            <View
              {...this._panResponder.panHandlers}
              style={styles.zoomControlTouchArea}
            />
          </Animated.View>
        </View>
        <Text style={styles.zoomControlText}>-</Text>
      </View>
    );
  }
}

class EnhancedCameraScreen extends PureComponent {
  constructor(props) {
    super(props);
    const {
      flashMode = RNCamera.Constants.FlashMode.auto,
      type = RNCamera.Constants.Type.back,
      defaultZoom = 0
    } = props;

    this.state = {
      isLandscape: !isPortrait(),
      flashMode: flashMode,
      type: type,
      zoom: defaultZoom
    };
  }

  onLayout = e => {
    const { width, height } = e.nativeEvent.layout;
    this.setState({ isLandscape: height < width });
  };

  changeFlashMode = () => {
    const { flashMode } = this.state;
    if (flashMode === RNCamera.Constants.FlashMode.auto) {
      this.setState({ flashMode: RNCamera.Constants.FlashMode.off });
    } else if (flashMode === RNCamera.Constants.FlashMode.off) {
      this.setState({ flashMode: RNCamera.Constants.FlashMode.on });
    } else {
      this.setState({ flashMode: RNCamera.Constants.FlashMode.auto });
    }
  };

  changeType = () => {
    const { type } = this.state;
    if (type === RNCamera.Constants.Type.back) {
      this.setState({ type: RNCamera.Constants.Type.front });
    } else {
      this.setState({ type: RNCamera.Constants.Type.back });
    }
  };

  takePicture = async () => {
    const { onTakePicture = () => {} } = this.props;

    if (this._camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this._camera.takePictureAsync(options);
      onTakePicture(data);
    }
  };

  zoomControlOnChange = value => {
    this.setState({ zoom: value });
  };

  render() {
    const {
      flashImages = {
        [RNCamera.Constants.FlashMode.on]: require("./images/flashOn.png"),
        [RNCamera.Constants.FlashMode.off]: require("./images/flashOff.png"),
        [RNCamera.Constants.FlashMode.auto]: require("./images/flashAuto.png")
      },
      otherImages = {
        flip: require("./images/cameraFlipIcon.png"),
        button: require("./images/cameraButton.png")
      },
      minimumZoom = 0,
      maximumZoom = 1.0
    } = this.props;
    const { flashMode, isLandscape, type, zoom } = this.state;
    const controlContainerStyles = {
      ...styles.controlContainer,
      marginHorizontal: Platform.isPad || isLandscape ? 0 : 20,
      marginVertical: Platform.isPad || isLandscape ? 40 : 0
    };

    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <StatusBar hidden={true} />
        <RNCamera
          ref={ref => {
            this._camera = ref;
          }}
          style={styles.preview}
          type={type}
          flashMode={flashMode}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
          zoom={zoom}
        />
        <View style={styles.zoomControlContainerLandscape}>
          <Slider
            onChange={this.zoomControlOnChange}
            startValue={zoom}
            minimumValue={minimumZoom}
            maximumValue={maximumZoom}
          />
        </View>
        <View
          style={
            Platform.isPad || isLandscape
              ? styles.controlsContainerLandscape
              : styles.controlsContainerPortrait
          }
        >
          <TouchableOpacity
            onPress={this.changeFlashMode}
            style={controlContainerStyles}
          >
            <Image
              style={styles.flashModeImage}
              source={flashImages[flashMode]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Image style={styles.captureImage} source={otherImages.button} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.changeType}
            style={controlContainerStyles}
          >
            <Image style={styles.flipCameraImage} source={otherImages.flip} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "gray"
  },
  zoomControlContainerLandscape: {
    position: "absolute",
    left: 5,
    top: 0,
    bottom: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  zoomControlText: {
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
  zoomControlTrackContainer: {
    width: 40,
    alignItems: "center"
  },
  zoomControlTrack: {
    width: 10,
    height: 200,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderColor: "gray",
    borderWidth: 1
  },
  zoomControlThumb: {
    position: "absolute",
    width: 30,
    height: 30,
    left: 5,
    top: 0,
    borderRadius: 15,
    backgroundColor: "yellow"
  },
  zoomControlTouchArea: {
    position: "absolute",
    backgroundColor: "transparent",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10
  },
  controlsContainerLandscape: {
    position: "absolute",
    right: 20,
    top: 0,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  controlsContainerPortrait: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "gray"
  },
  controlContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 50,
    height: 50,
    borderRadius: 25
  },
  flashModeImage: {
    resizeMode: "contain",
    width: 30,
    height: 30
  },
  flipCameraImage: {
    resizeMode: "contain",
    width: 30,
    height: 30
  },
  captureImage: {
    resizeMode: "contain",
    width: 70,
    height: 70
  }
};

export default EnhancedCameraScreen;
