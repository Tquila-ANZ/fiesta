import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

class TqanzNotes extends Component {
  render() {
    return (
      <View style={styles.inputsContainer}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default TqanzNotes;
