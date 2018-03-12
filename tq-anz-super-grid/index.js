import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import GridView from "react-native-super-grid";

export default class TqanzSuperGrid extends Component {
  render() {
    // Taken from https://flatuicolors.com/
    const items = [
      { name: "CAMERA", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" },
      { name: "FEISTA COMP", code: "#f9521f" }
    ];

    return (
      <GridView
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            {/* <Text style={styles.itemCode}>{item.code}</Text> */}
          </View>
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
