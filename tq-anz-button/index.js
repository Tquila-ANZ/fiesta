import React, { Component } from "react";
import { Button, View, TouchableHighlight, Text } from "react-native";
import styles from './styles';

class TqanzButton extends Component {
  render() {
    return (
      <View style={styles.inputsContainer}>
        <TouchableHighlight
          style={styles.fullWidthButton}
          {...this.props}
        >
          <Text style={styles.fullWidthButtonText}>{this.props.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TqanzButton;
