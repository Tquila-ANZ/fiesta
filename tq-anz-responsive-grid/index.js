import React, { PureComponent } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;

class TqanzResponsiveGrid extends PureComponent {
  state = {
    itemSize: null
  };

  _handleOnLayout = e => {
    const { nativeEvent: { layout: { width } } } = e;
    const { itemsPerRow } = this.props;
    this.setState({
      itemSize: Math.floor(width / itemsPerRow)
    });
  };

  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    const { itemSize } = this.state;

    const { data, onPress, renderItem, itemsPerRow, showGrid } = this.props;
    let blanks = 0;
    if (data.length % itemsPerRow > 0) {
      blanks = itemsPerRow - data.length % itemsPerRow;
    }

    return (
      <View style={styles.container} onLayout={this._handleOnLayout}>
        {itemSize
          ? data.concat(new Array(blanks).fill("blank")).map((item, index) => (
              <View
                key={`item_${index}`}
                style={[
                  styles.itemContainerOutside,
                  {
                    height: itemSize,
                    width: itemSize
                  },
                  showGrid && index % itemsPerRow !== 0
                    ? styles.gridLineLeft
                    : null,
                  showGrid && index >= itemsPerRow ? styles.gridLineTop : null
                ]}
              >
                {item === "blank" ? null : renderItem(item, index)}
              </View>
            ))
          : null}
      </View>
    );
  }
}

TqanzResponsiveGrid.defaultProps = {
  data: [],
  styles: {},
  itemsPerRow: 2,
  onPress: () => {},

  renderItem: null,
  showGrid: false
};

const defaultStyles = {
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    flexWrap: "wrap"
  },
  itemContainerOutside: {
    padding: aspectRatio > 1.6 ? 10 : 40
  },
  itemContainerInside: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9521f",
    borderRadius: 5,
    padding: 10
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  gridLineLeft: {
    borderLeftWidth: 1,
    borderColor: "#b7bec3"
  },
  gridLineTop: {
    borderTopWidth: 1,
    borderColor: "#b7bec3"
  }
};

export default TqanzResponsiveGrid;
