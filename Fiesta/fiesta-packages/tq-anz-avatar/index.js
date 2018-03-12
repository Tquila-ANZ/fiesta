import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

class TqanzAvatar extends PureComponent {
  render() {
    const { srcImage } = this.props;
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };

    let image = (
      <FontAwesome style={styles.placeholderImg}>
        {Icons.addressCard}
      </FontAwesome>
    );

    if (srcImage) {
      image = <Image style={styles.avatarImg} source={{ uri: srcImage }} />;
    }

    return <View style={styles.container}>{image}</View>;
  }
}

const defaultStyles = {
  container: {
    flex: 1
  },
  placeholderImg: {
    fontSize: 60
  },
  avatarImg: {}
};

export default TqanzAvatar;
