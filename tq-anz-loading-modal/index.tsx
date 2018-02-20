import React, { Component } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

interface props {
  visible: boolean;
  animationType: 'none' | 'slide' | 'fade';
  transparent: boolean;
  size: number | 'small' | 'large';
  color: string;
  onRequestClose: any;
}

interface state {
  styles: any;
}

export default class TqanzLoadingModal extends Component<props, state> {
  public static defaultProps: Partial<props> = {
    visible: false,
    animationType: 'fade',
    transparent: true,
    size: 'large',
    color: 'white',
    onRequestClose: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      styles: {
        ...defaultStyles,
        ...props.styles
      }
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

    return (
      <Modal
        transparent={transparent}
        animationType={animationType}
        visible={visible}
        onRequestClose={() => onRequestClose()}
      >
        <View style={styles.modalBackground}>
          <ActivityIndicator size={size} color={color} />
        </View>
      </Modal>
    );
  }
}

const defaultStyles = {
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  }
};
