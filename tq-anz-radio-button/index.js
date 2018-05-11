import * as React from "react";
import { View, Text } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

class TqanzRadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      radios: props.radios,
      styles: {
        ...defaultStyles,
        ...props.styles
      }
    };
  }

  getIndex = (radios, selected) => {
    if (!radios) {
      return;
    }
    let index = undefined;

    radios.map((radio, i) => {
      if (radio.value === selected) {
        index = i;
      }
    });

    return index;
  };

  onSelect = (index, value) => {
    // This is to provide the ability to deselect a radio button if it is tapped
    // again
    const { selectedIndex } = this.state;
    if (index === selectedIndex) {
      this.setState({ selectedIndex: null });
      this.props.onSelect(index, null);
    } else {
      this.setState({ selectedIndex: index });
      this.props.onSelect(index, value);
    }
  };

  getTextColor = (index, selectedIndex) => {
    if (index === selectedIndex) {
      return { color: this.props.activeColor };
    } else {
      return {};
    }
  };

  renderGroup = (a, selectedIndex) => {
    if (a === undefined) a = new Array();

    // FOR TESTING a.push(new RadioGroupItem(1, "Single")); a.push(new
    // RadioGroupItem(1, "Double"));

    return a.map((info, index) => (
      <RadioButton
        key={info.value}
        value={info.value}
        style={this.state.styles.radio_button}
        activeColor={this.props.activeColor}
        color={this.props.activeColor}
      >
        <Text
          key={info.text}
          style={[
            this.state.styles.radio_text,
            this.getTextColor(index, selectedIndex)
          ]}
        >
          {info.text}
        </Text>
      </RadioButton>
    ));
  };

  render() {
    const styles = this.state.styles;
    const index = this.getIndex(this.props.radios, this.props.selectedRadio);
    const { inactiveColor = "black" } = this.props;
    return (
      <View>
        <RadioGroup
          onSelect={this.onSelect}
          style={styles.radio_group}
          selectedIndex={index}
          color={inactiveColor}
        >
          {this.renderGroup(this.props.radios, index)}
        </RadioGroup>
      </View>
    );
  }
}

const defaultStyles = {
  radio_text: {},
  radio_group: {},
  radio_button: {}
};

export default TqanzRadioButton;
