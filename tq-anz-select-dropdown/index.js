import React, { PureComponent } from "react";
import { View } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

export default class Dropdown extends PureComponent {
  /**
   * When the modal dropdown component receives defaultValue as null
   * you'd need to call select(-1) to make the dropdown go back to the default state
   * and clear out the previous selection.
   */
  componentWillReceiveProps(nextProps) {
    const { defaultValue = null } = nextProps;

    const { dropdown = null } = this.refs;

    if (!defaultValue && dropdown) {
      dropdown.select(-1);
    }
  }

  render() {
    let props = this.props;
    if (props && !props.defaultValue) {
      props = {
        ...props,
        defaultValue: "Please select..."
      };
    }

    return <ModalDropdown ref="dropdown" {...props} />;
  }
}
