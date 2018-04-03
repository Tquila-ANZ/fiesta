import React, { PureComponent } from "react";
import Spinner from "react-native-loading-spinner-overlay";

class TqanzLoader extends PureComponent {
  render() {
    const {
      visible = true,
      color = "#00aec7",
      overlayColor = "rgba(255, 255, 255, 0.95)",
      textContent = "Loading...",
      textStyle = "#00aec7"
    } = this.props;

    return (
      <Spinner
        visible={visible}
        color={color}
        overlayColor={overlayColor}
        textContent={textContent}
        textStyle={{ color: textStyle }}
      />
    );
  }
}

export default TqanzLoader;
