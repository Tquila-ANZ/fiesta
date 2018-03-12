import React, { PureComponent } from "react";
import { View, Modal, ActivityIndicator } from "react-native";

class FullScreenLoading extends PureComponent {
  render() {
    const {
      animationType = "fade",
      color = "white",
      size = "large",
      transparent = true,
      visible = false,
      onRequestClose = () => {}
    } = this.props;

    const Loader = this.props.Loader || (
      <ActivityIndicator size={size} color={color} />
    );

    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <Modal
        transparent={transparent}
        animationType={animationType}
        visible={visible}
        onRequestClose={() => onRequestClose()}
      >
        <View style={styles.container}>{Loader}</View>
      </Modal>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(85, 91, 107, 0.4109)"
  }
};

export default FullScreenLoading;
