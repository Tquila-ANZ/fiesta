import React, { PureComponent } from "react";
import { View, Text } from "react-native";

class TqanzCopyright extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          © Copyright {this.props.name} {getCopyrightYear()} - Version
          {this.props.version}
        </Text>
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1
  },
  text: {
    fontSize: 18,
    color: "black"
  }
};

export default TqanzCopyright;
