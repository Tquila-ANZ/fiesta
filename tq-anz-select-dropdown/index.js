import React, { Component } from "react";
import { View } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

export default class Dropdown extends Component {
  render() {
    const { options } = this.props;
    return <ModalDropdown {...this.props} />;
  }
}
