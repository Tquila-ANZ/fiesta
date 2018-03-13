import React, { PureComponent } from "react";
import { View } from "react-native";
import GoogleStaticMap from "react-native-google-static-map";

// https://developers.google.com/maps/documentation/static-maps/intro
// props.attributes = {
//   latitude: "32.064171",
//   longitude: "34.7748068",
//   zoom: 13,
//   size: {
//     width: 300,
//     height: 550
//   },
//   key: "" //'AAAAAAAAAA-BBBBBBBBBBBBBBBBB-CCCCCCCCCC'
// };

class TqanzStaticMap extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <View style={styles.container}>
        <GoogleStaticMap style={styles.map} {...this.props.attributes} />
      </View>
    );
  }
}

const defaultStyles = {
  container: {},
  map: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1
  }
};

export default TqanzStaticMap;
