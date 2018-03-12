import React, { Component } from "react";
import Spinner from "react-native-loading-spinner-overlay";

class TqanzLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      color: "#00aec7",
      overlayColor: "rgba(255, 255, 255, 0.95)",
      textContent: "Loading...",
      textStyle: "#00aec7"
    };
  }

  render() {
    return (
      <Spinner
        visible={this.props.visible}
        color={this.props.color}
        overlayColor={this.props.overlayColor}
        textContent={this.props.textContent}
        textStyle={{ color: this.props.textStyle }}
      />
    );
  }
}

export default TqanzLoader;
