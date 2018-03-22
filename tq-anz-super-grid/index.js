import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import GridView from "react-native-super-grid";

export default class TqanzSuperGrid extends Component {
  constructor(props) {
    super(props);
    //this.state = { gridItems: props.gridItems, goto: props.nav };
  }
  _onPressButton(screen) {
    this.props.nav(screen, {
      name: screen
    });
  }
  render() {
    return (
      <GridView
        itemDimension={130}
        items={this.props.gridItems}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity
            style={styles.itemContainerOutside}
            onPress={() => this._onPressButton(item.code)}
          >
            <View
              style={[styles.itemContainer, { backgroundColor: "#f9521f" }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              {/* <Text style={styles.itemCode}>{item.code}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1
  },
  itemContainerOutside: {
    justifyContent: "flex-end",
    borderRadius: 5,
    height: 150
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  }
});
