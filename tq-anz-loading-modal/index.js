import React, { Component } from "react";
import { View, Modal, ActivityIndicator } from "react-native";
export default class TqanzLoadingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: Object.assign({}, defaultStyles, props.styles)
    };
  }
  render() {
    const {
      visible,
      size,
      color,
      onRequestClose,
      transparent,
      animationType
    } = this.props;
    const styles = this.state.styles;
    return React.createElement(
      Modal,
      {
        transparent: transparent,
        animationType: animationType,
        visible: visible,
        onRequestClose: () => onRequestClose()
      },
      React.createElement(
        View,
        { style: styles.modalBackground },
        React.createElement(ActivityIndicator, { size: size, color: color })
      )
    );
  }
}
TqanzLoadingModal.defaultProps = {
  visible: false,
  animationType: "fade",
  transparent: true,
  size: "large",
  color: "white",
  onRequestClose: () => {}
};
const defaultStyles = {
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  }
};
//# sourceMappingURL=index.js.map
