import React, { PureComponent } from "react";
import { View, TextInput } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import CheckBox from "react-native-check-box";

class TqanzCheckbox extends PureComponent {
  render() {
    const styles = {
      ...defaultStyles,
      ...this.props.styles
    };
    const {
      onClick = () => {},
      isChecked = false,
      leftText = "",
      rightText = "",
      rightTextStyle = {},
      leftTextStyle = {},
      unCheckedImage = defaultUnCheckedImage,
      checkedImage = defaultCheckedImage
    } = this.props;

    return (
      <CheckBox
        style={styles.container}
        onClick={onClick}
        isChecked={isChecked}
        leftText={leftText}
        rightText={rightText}
        leftTextStyle={leftTextStyle}
        rightTextStyle={rightTextStyle}
        checkedImage={checkedImage}
        unCheckedImage={unCheckedImage}
      />
    );
  }
}
const defaultUnCheckedImage = <FontAwesome>{Icons.checkCircleO}</FontAwesome>;
const defaultCheckedImage = <FontAwesome>{Icons.checkCircle}</FontAwesome>;

const defaultStyles = {
  container: { alignItems: "center", justifyContent: "center" },
  textInput: {}
};

export default TqanzCheckbox;
