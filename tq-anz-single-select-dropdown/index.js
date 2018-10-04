import React, { PureComponent } from "react";
import Dropdown from "./dropdown";

class SingleSelectDropdown extends PureComponent {
  selectNewItems = selectedItems => {
    const selectedItem = selectedItems[0];
    this.props.onSelectedItemsChange(selectedItem);
  };

  getItems = props => {
    const { items = [], displayKey, uniqueKey } = props;

    const haveAddedNullKey = items.reduce((exists, item) => {
      if (item[uniqueKey] === null) {
        return true;
      } else {
        return exists;
      }
    }, false);

    if (haveAddedNullKey) {
      return items;
    } else {
      const newItems = [
        {
          [uniqueKey]: null,
          [displayKey]: "None"
        },
        ...items
      ];
      return newItems;
    }
  };

  render() {
    return (
      <Dropdown
        {...this.props}
        items={this.getItems(this.props)}
        single={true}
        onSelectedItemsChange={this.selectNewItems}
      />
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
