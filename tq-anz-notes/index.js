import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

class TqanzNotes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.inputsContainer}>
        <TextInput value={this.props.text} />
      </View>
    );
  }
}

export default TqanzNotes;
