import React, { Component } from "react";
import { View, ScrollView, TouchableHighlight } from "react-native";

import Collapse from "./Collapse";

export default class Accordion extends Component {
  state = {
    activeItem: null
  };

  componentDidMount() {
    const { activeIndex = null } = this.props;

    this._toggle(activeIndex);
  }

  componentWillReceiveProps(nextProps) {
    const { activeIndex = null } = nextProps;

    if (this.props.activeIndex !== activeIndex) {
      this._toggle(activeIndex);
    }
  }

  _toggle(index) {
    let oldItem = this.state.activeItem;
    if (oldItem === index) {
      this.setState({ activeItem: undefined });
    } else {
      this.setState({ activeItem: index });
    }
  }
  render() {
    const {
      items,
      headerRender,
      contentRender,
      headerName,
      contentName,
      duration,
      backgroundColor,
      onScroll = () => {}
    } = this.props;

    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <View style={styles.accordion_container}>
        <ScrollView onScroll={onScroll}>
          {items.map((item, index) => {
            return (
              <View key={item.key} style={styles.accordion_content_container}>
                <TouchableHighlight
                  underlayColor={"rgba(0,0,0,0.2)"}
                  style={[
                    styles.accordion_header,
                    index === items.length - 1 && styles.accordion_header_border
                  ]}
                  onPress={() => {
                    this._toggle(index);
                  }}
                >
                  {headerRender(
                    item[headerName],
                    this.state.activeItem !== index
                  )}
                </TouchableHighlight>
                <Collapse
                  styles={styles}
                  collapse={this.state.activeItem !== index}
                  content={item[contentName]}
                  duration={duration}
                  backgroundColor={backgroundColor}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const defaultStyles = {
  accordion_container: {
    flex: 1
  },
  accordion_header: {
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  accordion_header_border: {},
  accordion_content_container: {
    marginBottom: 10
  }
};

Accordion.defaultProps = {
  items: [],
  duration: 500
};
