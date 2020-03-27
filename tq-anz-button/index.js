import React, { PureComponent } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";

class TqanzButton extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    /**
     * Pass any properties for touchable opacity via
     * attributes object
     */

    const {
      title = "Button",
      onPress = () => {},
      icon = null,
      disabled = false
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.container, styles.button]}
          disabled={disabled}
        >
          {icon ? (
            <FontAwesome style={styles.icon}>{SolidIcons[icon]}</FontAwesome>
          ) : null}
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const defaultStyles = {
  container: {},
  button: {},
  icon: {},
  text: {}
};

const roundButtonWithIconOnTop = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: "blue",
    height: 100,
    width: 100
  },
  icon: {
    fontSize: 24,
    color: "blue"
  },
  text: {}
};

export default TqanzButton;
