import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableWithoutFeedback } from "react-native";

export default class RadioButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedIndex: nextProps.selectedIndex });
  }

  render() {
    var { children, isSelected, renderHeader = () => {}, value } = this.props;

    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <View
        style={{
          opacity: this.props.disabled ? 0.4 : 1
        }}
      >
        <TouchableWithoutFeedback
          disabled={this.props.disabled}
          onPress={() =>
            this.context.onSelect(this.props.index, this.props.value)
          }
        >
          <View
            style={[
              styles.container,
              this.props.style,
              this.props.isSelected
                ? {
                    backgroundColor: this.context.highlightColor
                  }
                : null
            ]}
          >
            <View style={styles.item}>
              {renderHeader(value, isSelected)}
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

RadioButton.contextTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  highlightColor: PropTypes.string
};

let defaultStyles = {
  container: {
    flexGrow: 1,
    flexDirection: "row",
    padding: 10
  },
  radio: {
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: 14
  }
};
