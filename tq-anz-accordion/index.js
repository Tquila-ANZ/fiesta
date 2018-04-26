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
    this.state = {
      showArrow: false
    };
  }

  componentWillMount() {
    if (this.props.showArrow) {
      this.setState({ showArrow: true });
    }
  }

  renderHeader = (info, up = false) => {
    let icon = (
      <FontAwesome style={this.styles.tq_accordion_header_arrow_icon}>
        {Icons.angleUp}
      </FontAwesome>
    );

    if (up) {
      icon = (
        <FontAwesome style={this.styles.tq_accordion_header_arrow_icon}>
          {Icons.angleDown}
        </FontAwesome>
      );
    }
    return (
      <View style={this.styles.tq_accordion_header}>
        <Text style={this.styles.tq_accordion_header_text}>{info}</Text>
        {this.state.showArrow ? <View>{icon}</View> : null}
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
          headerRender={this.renderHeader.bind(this)}
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
    justifyContent: "center",
    backgroundColor: "#f1f1f1"
  },
  tq_accordion_header_arrow_icon: {
    color: "#f1f1f1",
    fontSize: 20
  },
  tq_accordion_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  tq_accordion_header_text: {
    justifyContent: "flex-start",
    fontSize: 20,
    fontWeight: "bold"
  }
};

export default TqanzAccordion;
