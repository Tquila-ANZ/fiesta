import React, { PureComponent } from "react";
import { View } from "react-native";

class TqanzCheckbox extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    return <View />;
  }
}

const defaultStyles = {
  container: {},
  textInput: {}
};

export default TqanzCheckbox;
