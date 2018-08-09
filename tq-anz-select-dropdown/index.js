import React, { PureComponent } from "react";
import { Dimensions, View, TouchableOpacity, StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import FontAwesome, { Icons } from "react-native-fontawesome";

export default class Dropdown extends PureComponent {
  state = {
    y: null
  };

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

  resetValue = () => {
    const { onSelect = () => {}, defaultValue = {} } = this.props;

    onSelect(null, defaultValue);
  };

  onLayout = ({ nativeEvent }) => {
    if (this.view) {
      this.view.measure((x, y, width, height, pageX, pageY) => {
        this.setState({
          y: pageY
        });
      });
    }
  };

  render() {
    let props = this.props;
    const {
      cancelButtonIcon = "timesCircleO",
      cancelButtonStyle = {},
      options = [],
      showCancelButton = true
    } = props;

    if (props && !props.defaultValue) {
      props = {
        ...props,
        defaultValue: "Please select..."
      };
    }

    if (this.state.y) {
      const optionsHeight = (40 + StyleSheet.hairlineWidth) * options.length;
      const windowHeight = Dimensions.get("window").height - this.state.y - 40;
      const dropdownHeight = Math.min(optionsHeight, windowHeight);

      props = {
        ...props,
        dropdownStyle: {
          height: dropdownHeight,
          ...props.dropdownStyle
        }
      };
    }

    return (
      <View ref={component => (this.view = component)} onLayout={this.onLayout}>
        <ModalDropdown ref="dropdown" {...props} />
        {showCancelButton ? (
          <TouchableOpacity
            style={cancelButtonStyle.container}
            onPress={this.resetValue}
          >
            <FontAwesome style={cancelButtonStyle.icon}>
              {Icons[cancelButtonIcon]}
            </FontAwesome>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const defaultStyles = {
  dropdownStyle: {
    minWidth: "90%",
    borderWidth: 1,
    flex: 1,
    borderColor: "blue",
    backgroundColor: "grey"
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "blue"
  },
  row: {
    container: {
      borderWidth: 0,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "white"
    },
    selectedText: {
      padding: 5,
      backgroundColor: "blue",
      color: "white",
      borderWidth: 0
    },
    text: {
      color: "black",
      padding: 10,
      backgroundColor: "grey"
    }
  }
};
