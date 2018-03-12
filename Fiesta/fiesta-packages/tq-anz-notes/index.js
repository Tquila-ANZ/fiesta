import React, { PureComponent } from "react";
import { View, TextInput } from "react-native";

class TqanzNotes extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    return (
      <TextInput
        {...this.props.attributes}
        style={styles.textInput}
        value={this.props.text}
      />
    );
  }
}

const defaultStyles = {
  container: {},
  textInput: {}
};

export default TqanzNotes;
