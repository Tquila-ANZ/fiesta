import React, { PureComponent } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

class TqanzResponsiveGrid extends PureComponent {
  state = {
    itemSize: null,
  };

  _handleOnLayout = (e) => {
    const {
      nativeEvent: {
        layout: { width },
      },
    } = e;
    const { itemsPerRow } = this.props;
    this.setState({ itemSize: Math.floor(width / itemsPerRow) });
  };

  render() {
    const {
      data,
      gridViewStyle,
      itemInsideStyle,
      itemOutsideStyle,
      itemTextStyle,
      itemOnPress,
      renderItem,
      spacing,
    } = this.props;
    const { itemSize } = this.state;
    return (
      <View
        style={[styles.gridViewContainer, gridViewStyle]}
        onLayout={this._handleOnLayout}
      >
        {itemSize
          ? data.map((item, index) => (
              <View
                key={`item_${index}`}
                style={[
                  styles.itemContainerOutside,
                  itemOutsideStyle,
                  itemSize ? { height: itemSize, width: itemSize } : null,
                ]}
              >
                {renderItem ? (
                  renderItem(item, index)
                ) : (
                  <TouchableOpacity
                    style={[styles.itemContainerInside, itemInsideStyle]}
                    onPress={itemOnPress(item)}
                  >
                    <Text
                      style={[styles.itemText, itemTextStyle, item.textStyle]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ))
          : null}
      </View>
    );
  }
}

TqanzResponsiveGrid.defaultProps = {
  data: [],
  itemsPerRow: 2,
  gridViewStyle: null,
  itemOutsideStyle: null,
  itemInsideStyle: null,
  itemOnPress: () => {},
  renderItem: null,
  spacing: 0,
};

const styles = {
  gridViewContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    flexWrap: "wrap",
  },
  itemContainerOutside: {},
  itemContainerInside: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9521f",
    borderRadius: 5,
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
};

export default TqanzResponsiveGrid;
