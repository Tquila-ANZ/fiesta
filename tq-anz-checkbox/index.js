import React, { PureComponent } from "react";
import { CheckBox } from "react-native-elements";
import { View } from "react-native";

class TqanzCheckbox extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    return <CheckBox {...this.props} />;
  }
}

const defaultStyles = {
  container: {},
  textInput: {}
};

export default TqanzCheckbox;
