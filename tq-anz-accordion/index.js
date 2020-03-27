import React, { Component } from "react";
import { View, Text } from "react-native";
import Accordion from "./Accordion";
import FontAwesome, { Icons } from "react-native-fontawesome";

class TqanzAccordion extends Component {
  renderHeader = (headerName, up = false) => {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    const {
      showArrow = true,
      iconUp = "angleUp",
      iconDown = "angleDown"
    } = this.props;

    return (
      <View style={styles.tq_accordion_header}>
        <Text style={styles.tq_accordion_header_text}>{headerName}</Text>
        {showArrow ? (
          <View>
            <FontAwesome style={styles.tq_accordion_header_arrow_icon}>
              {up ? Icons[iconUp] : Icons[iconDown]}
            </FontAwesome>
          </View>
        ) : null}
      </View>
    );
  };

  render() {
    const { renderHeader = this.renderHeader } = this.props;
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    const {
      headerName = "name",
      contentName = "description",
      duration = 200,
      backgroundColor = "#fff",
      activeIndex = null,
      onScroll = () => {}
    } = this.props;

    return (
      <View style={styles.tq_accordion_container}>
        <Accordion
          styles={styles}
          activeIndex={activeIndex}
          items={this.props.items}
          onScroll={onScroll}
          headerRender={renderHeader}
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
