import React, { PureComponent } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import Dropdown from "./dropdown";

class SingleSelectDropdown extends PureComponent {
  state = {
    selectedItem: null
  };

  _multiSelect = {};

  clear = () => {
    const { onClearItems = () => {} } = this.props;
    this._multiSelect._removeAllItems();
    onClearItems();
  };

  selectNewItems = selectedItems => {
    const selectedItem = selectedItems[0];
    this.setState({ selectedItem });
    this.props.onSelectedItemsChange(selectedItem);
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <View>
        <Dropdown
          ref={component => {
            this._multiSelect = component;
          }}
          {...this.props}
          single={true}
          onSelectedItemsChange={this.selectNewItems}
        />
        {selectedItem && !this.props.disabled ? (
          <View style={styles.iconContainer}>
            <Icon name="close" {...styles.closeButton} onPress={this.clear} />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = {
  iconContainer: {
    alignItems: "flex-end",
    marginTop: -15
  },
  closeButton: {
    fontSize: 8,
    height: 12,
    type: "font-awesome",
    color: "red"
  }
};

export default SingleSelectDropdown;
