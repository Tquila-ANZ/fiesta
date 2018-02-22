import * as React from "react";
import { View, Text } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
class RadioGroupItem {
  constructor(value, text) {
    this.value = value;
    this.text = text;
  }
}
class TqanzRadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.renderGroup = a => {
      if (a === undefined) a = new Array();
      // FOR TESTING
      // a.push(new RadioGroupItem(1, "Single"));
      // a.push(new RadioGroupItem(1, "Double"));
      return a.map((info, index) =>
        React.createElement(
          RadioButton,
          {
            key: info.value,
            value: info.value,
            style: this.state.styles.radio_button,
            activeColor: this.props.activeColor,
            color: this.props.activeColor
          },
          React.createElement(
            Text,
            {
              key: info.text,
              style: [this.state.styles.radio_text, this.getTextColor(index)]
            },
            info.text
          )
        )
      );
    };
    this.state = {
      radios: props.radios,
      styles: Object.assign({}, defaultStyles, props.styles)
    };
  }
  onSelect(index) {
    this.setState({
      selectedIndex: index
    });
  }
  getTextColor(index) {
    const { selectedIndex } = this.state;
    if (index === selectedIndex) {
      return {
        color: this.props.activeColor
      };
    } else {
      return {};
    }
  }
  render() {
    const styles = this.state.styles;
    return React.createElement(
      View,
      null,
      React.createElement(
        RadioGroup,
        { onSelect: index => this.onSelect(index), style: styles.radio_group },
        this.renderGroup(this.props.radios)
      )
    );
  }
}
const defaultStyles = {
  radio_text: {},
  radio_group: {},
  radio_button: {}
};
export default TqanzRadioButton;
//# sourceMappingURL=index.js.map
