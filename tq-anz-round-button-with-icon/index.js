import React, { PureComponent } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

class TqanzRoundButton extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    const { title = "Button", onPress = () => {}, icon = "plus" } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.container, styles.button]}
        >
          <FontAwesome style={styles.icon}>{Icons[icon]}</FontAwesome>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const defaultStyles = {
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

export default TqanzRoundButton;
