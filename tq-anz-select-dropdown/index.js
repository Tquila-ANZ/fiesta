import React, { PureComponent } from "react";
import { View } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

export default class Dropdown extends PureComponent {
  render() {
    let props = this.props;
    if (props && !props.defaultValue) {
      props = {
        ...props,
        defaultValue: "Please select..."
      };
    }

    return <ModalDropdown {...props} />;
  }
}
