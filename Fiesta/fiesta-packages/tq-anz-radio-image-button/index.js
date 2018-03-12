import * as React from "react";
import { View, Image } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
class RadioGroupItem {
  constructor(value, text, selectedImageUrl, unselectedImageUrl) {
    this.value = value;
    this.text = text;
    this.selectedImageUrl = selectedImageUrl;
    this.unselectedImageUrl = unselectedImageUrl;
  }
}
class TqanzRadioImageButton extends React.Component {
  constructor(props) {
    super(props);
    this.renderGroup = a => {
      if (a === undefined) a = new Array();
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
          this.isActive(index)
            ? React.createElement(Image, {
                style: this.state.styles.radio_image,
                source: info.selectedImageUrl
              })
            : React.createElement(Image, {
                style: this.state.styles.radio_image,
                source: info.unselectedImageUrl
              })
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
  isActive(index) {
    const { selectedIndex } = this.state;
    return index === selectedIndex;
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
  radio_button: {},
  radio_image: {
    width: 100,
    height: 100
  }
};
export default TqanzRadioImageButton;
//# sourceMappingURL=index.js.map
