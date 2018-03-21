import React, { PureComponent } from "react";
import { View, TouchableOpacity, Text } from "react-native";

class TqanzButton extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    let props = { ...this.props };
    // No need for styles in the props anymore
    delete props["styles"];

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} {...props}>
          <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const defaultStyles = {
  container: {},
  button: {},
  text: {}
};

export default TqanzButton;
