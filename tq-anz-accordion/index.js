import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Accordion from "./Accordion";
import FontAwesome, { Icons } from "react-native-fontawesome";

class TqanzAccordion extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      ...defaultStyles,
      ...props.styles
    };
  }

  renderHeader = (headerName, up = false) => {
    const {
      showArrow = true,
      iconUp = "angleUp",
      iconDown = "angleDown"
    } = this.props;

    return (
      <View style={this.styles.tq_accordion_header}>
        <Text style={this.styles.tq_accordion_header_text}>{headerName}</Text>
        {showArrow ? (
          <View>
            <FontAwesome style={this.styles.tq_accordion_header_arrow_icon}>
              {up ? Icons[iconUp] : Icons[iconDown]}
            </FontAwesome>
          </View>
        ) : null}
      </View>
    );
  };

  render() {
    const styles = this.styles;
    const {
      headerName = "name",
      contentName = "description",
      duration = 200,
      backgroundColor = "#fff"
    } = this.props;

    return (
      <View style={styles.tq_accordion_container}>
        <Accordion
          styles={styles}
          items={this.props.items}
          headerRender={this.renderHeader}
          contentRender={this.renderContent}
          headerName={headerName}
          contentName={contentName}
          duration={duration}
          backgroundColor={backgroundColor}
        />
      </View>
    );
  }
}

const defaultStyles = {
  tq_accordion_container: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  tq_accordion_header_arrow_icon: {
    color: "#f1f1f1",
    fontSize: 20,
    flex: 1
  },
  tq_accordion_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    backgroundColor: "#009FDF"
  },
  tq_accordion_header_text: {
    justifyContent: "flex-start",
    fontSize: 20,
    fontWeight: "bold"
  }
};

export default TqanzAccordion;
