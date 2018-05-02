import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import Hr from "../tq-anz-hr";

class TqanzCustomerDetails extends PureComponent {
  render() {
    // Data Format

    // First Name: "Gary",
    // Surname: "Hendrix",
    // Gender: "Male",
    // Date Of Birth: "31 Dec 1991",
    // Mobile : "0405950939"

    const { data, columns = 2 } = this.props;
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    const cols = [],
      rows = [];
    Object.keys(data).map((d, index) => {
      cols.push({
        label: d,
        value: data[d]
      });
    });

    let column = [];
    cols.forEach((col, index) => {
      column = column.concat(col);
      if ((index + 1) % columns === 0) {
        rows.push(column);
        column = [];
      }
      if (index === cols.length - 1) {
        rows.push(column);
      }
    });

    return (
      <View style={styles.container}>
        {rows.map((row, index) => (
          <View key={index}>
            <View style={styles.row}>
              {row.map(col => (
                <View style={styles.column} key={col.label}>
                  <Text style={styles.label}>{col.label}</Text>
                  <Text style={styles.value}>{col.value}</Text>
                </View>
              ))}
            </View>
            <Hr lineStyle={styles.lineStyle} />
          </View>
        ))}
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1
  },
  row: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
  column: {
    flex: 1
  },
  label: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  value: {
    color: "black",
    fontSize: 18
  },
  lineStyle: {
    backgroundColor: "black"
  }
};

export default TqanzCustomerDetails;
