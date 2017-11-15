import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

class TqanzCustomerDetails extends Component {

  constructor(props) {
		super(props);
	}

  const dataLoopObj = (data, keyName) => {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={styles.wordContainer}>
          <Text>
            {keyName}:{' '}
          </Text>
        </View>
        <View style={styles.item2}>
          <Text>
            {data[keyName]}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.inputsContainer}>
	      {dataLoopObj(this.props.data, this.props.keyName)}
      </View>
    );
  }
}

export default TqanzCustomerDetails;
