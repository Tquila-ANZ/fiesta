import React, { PureComponent } from "react";
import { Text, View } from "react-native";

export default class Hr extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return <View style={styles.hr} />;
  }
}

const defaultStyles = {
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
};
