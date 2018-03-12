import React, { PropTypes, Component } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import Collapse from "./Collapse";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: undefined
    };
    this.styles = {
      ...defaultStyles,
      ...props.styles
    };
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
      maxHeight,
      duration,
      backgroundColor
    } = this.props;
    const styles = this.styles;
    return (
      <View style={styles.accordion_container}>
        {items.map((item, index) => {
          return (
            <View key={index} style={styles.accordion_content_container}>
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
                {headerRender(item[headerName])}
              </TouchableHighlight>
              <Collapse
                styles={styles}
                maxHeight={maxHeight}
                collapse={this.state.activeItem !== index}
                content={item[contentName]}
                duration={duration}
                backgroundColor={backgroundColor}
              />
            </View>
          );
        })}
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
