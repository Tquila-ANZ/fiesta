import React, { PureComponent } from "react";
import { View, TextInput } from "react-native";

class TqanzNotes extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    let props = { ...this.props };
    // No need for styles in the props anymore
    delete props["styles"];

    return <TextInput {...props} style={styles.textInput} />;
  }
}

const defaultStyles = {
  container: {},
  textInput: {}
};

export default TqanzNotes;
