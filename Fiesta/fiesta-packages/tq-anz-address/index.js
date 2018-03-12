import React, { Component } from "react";
import { View, Text } from "react-native";

class TqanzAddress extends Component {
  constructor(props) {
    super(props);
    this.state = { address: this.props.address };
    this.styles = {
      ...defaultStyles,
      ...props.styles
    };
  }
  render() {
    const styles = this.styles;
    return (
      <View style={styles.address_container}>
        <View style={styles.address_inner_container}>
          <Text
            style={{ color: this.props.titleColor, ...styles.address_title }}
          >
            {this.props.title}
          </Text>
          <Text
            style={{ color: this.props.valueColor, ...styles.address_content }}
          >
            {this.props.address["sked__Job__r"]["sked__Address__c"]}
          </Text>
        </View>
      </View>
    );
  }
}

const defaultStyles = {
  address_container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: 22,
    paddingRight: 22
  },
  address_inner_container: {
    flexDirection: "row",
    flex: 1,
    padding: 8
  },
  address_title: {},
  address_content: {}
};

export default TqanzAddress;
