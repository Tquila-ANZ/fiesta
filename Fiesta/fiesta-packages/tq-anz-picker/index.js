import React, { Component } from "react";
import { View, Text, Picker, TouchableWithoutFeedback } from "react-native";
import { RadioButtons } from "react-native-radio-buttons";
import { SegmentedControls } from "react-native-radio-buttons";

class TqanzPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "none", options: [], title: "" };
    this.styles = {
      ...defaultStyles,
      ...props.styles
    };
  }

  setSelectedOption(selectedOption) {
    this.setState({
      selectedOption
    });
  }

  render() {
    const styles = this.styles;

    return (
      <View style={styles.picker_container}>
        <Text style={styles.picker_title}>{this.props.title}</Text>
        <SegmentedControls
          options={this.props.options}
          onSelection={this.setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
        />
      </View>
    );
  }
}
const defaultStyles = {
  picker_container: {
    flex: 1,
    backgroundColor: "white",
    padding: 6
  },
  picker_title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 2
  }
};

export default TqanzPicker;
