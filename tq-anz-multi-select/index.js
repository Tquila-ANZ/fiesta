import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

/**
 * Props expected
 *
 * items: Array of items/options [{idField: valueField}]
 * selectedItems: Array of selected items/options
 *
 * idField: the "key" for the item in the items array
 * valueField: the "value" key for the item in the items array
 *
 * onSelect: Returns the array of selected items
 *
 * iconChecked: Icon for checked state
 * iconUnchecked: Icon for unchecked state
 *
 * styles: Object for styles
 */

export default class SelectMultiple extends PureComponent {
  constructor(props) {
    super(props);

    const {
      items = [],
      selectedItems = [],
      idField = "text",
      valueField = "value"
    } = props;

    const selectedItemsMap = {};

    selectedItems.map(item => {
      if (!item) {
        return;
      }

      if (item[idField]) {
        selectedItemsMap[item[idField]] = item;
      } else {
        selectedItemsMap[item] = item;
      }
    });

    this.state = {
      items,
      selectedItems,
      selectedItemsMap: {
        ...selectedItemsMap
      },
      idField,
      valueField
    };
  }

  onClick = item => {
    const { selectedItemsMap, items, idField, valueField } = this.state;
    const { onSelect } = this.props;

    if (selectedItemsMap[item[idField]]) {
      delete selectedItemsMap[item[idField]];
    } else {
      selectedItemsMap[item[idField]] = item;
    }

    this.setState({
      selectedItemsMap: {
        ...selectedItemsMap
      }
    });

    const selectedValues = Object.values(selectedItemsMap);
    onSelect(selectedValues);
  };

  render() {
    const { selectedItemsMap, items, idField, valueField } = this.state;
    const {
      iconChecked = Icons.checkSquare,
      iconUnchecked = Icons.squareO
    } = this.props;

    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <View style={styles.container}>
        {items.map(item => (
          <TouchableOpacity
            style={styles.checkbox_group}
            key={item.value}
            onPress={e => this.onClick(item)}
          >
            <FontAwesome style={styles.checkbox_button}>
              {selectedItemsMap[item[idField]] ? iconChecked : iconUnchecked}
            </FontAwesome>
            <Text style={styles.checkbox_text}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  checkbox_group: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    minWidth: 80
  },
  checkbox_button: {
    fontSize: 21,
    color: "#009FDF"
  },
  checkbox_text: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    marginBottom: 5
  }
};
