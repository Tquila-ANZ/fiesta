import React, { Component } from "react";
import { StyleSheet, Animated, ScrollView } from "react-native";

export default class Collapse extends Component {
  static defaultProps = {
    height: 0
  };

  contentInit = false;
  contentHeight = 0;
  state = {
    height: new Animated.Value(0)
  };

  componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  componentDidMount() {
    this.init(this.props);
  }

  init = (props = {}) => {
    const { height } = props;

    if (height !== this.state.height) {
      this.setState({
        height: new Animated.Value(height)
      });
    }
  };

  getContentHeight = event => {
    const newHeight = event.nativeEvent.layout.height;
    if (!this.contentInit) {
      // Do not use maxHeight as it messes with the whole usability of the app Using
      // maxHeight creates a collapse as a scroll container causing the app to now
      // have multiple scroll containers in terms of multiple collapse containers
      // Simply make the collapse container as big as the content itself

      this.contentHeight = event.nativeEvent.layout.height;
      this.contentInit = true;
      this.forceUpdate();
    }
  };

  handleHeight = () => {
    if (this.props.collapse) {
      Animated.timing(this.state.height, {
        toValue: 0,
        duration: this.props.duration
      }).start();
    } else {
      Animated.timing(this.state.height, {
        toValue: this.contentHeight,
        duration: this.props.duration
      }).start();
    }
  };

  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    if (this.contentInit) {
      this.handleHeight();
    }
    return (
      <Animated.View
        style={[
          styles.collapse_container,
          this.props.collapse && styles.collapse_item,
          this.contentInit && {
            height: this.state.height
          },
          this.props.backgroundColor && {
            backgroundColor: this.props.backgroundColor
          }
        ]}
      >
        <ScrollView
          onLayout={event => {
            this.getContentHeight(event);
          }}
          style={styles.collapse_view}
        >
          {this.props.content}
        </ScrollView>
      </Animated.View>
    );
  }
}

const defaultStyles = {
  collapse_container: {
    paddingTop: 0
  },
  collapse_view: {
    borderBottomColor: "#1E90FF",
    borderBottomWidth: 2,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderLeftColor: "#1E90FF",
    borderRightColor: "#1E90FF"
  },
  collapse_item: {
    paddingBottom: 0
  }
};
