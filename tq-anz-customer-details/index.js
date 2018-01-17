import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Hr from 'react-native-hr';
import styles from './styles';

class TqanzCustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      height: this.props.height,
      titleColor: this.props.titleColor,
      valueColor: this.props.valueColor,
    };
  }
  render() {
    return (
      <View style={styles.inputsContainer}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View>
            <Text>First name</Text>
          </View>
          <View>
            <Text>{(this.props.data.length>0)?this.props.data['FirstName']:""}</Text>
          </View>
          <View>
            <Text>Surname</Text>
          </View>
          <View>
            <Text>{(this.props.data.length>0)?this.props.data['LastName']:""}</Text>
          </View>
        </View>
        <Hr />
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View>
            <Text>Gender</Text>
          </View>
          <View>
            <Text>{(this.props.data.length>0)?this.props.data['Gender__c']:""}</Text>
          </View>
          <View>
            <Text>Date of Birth</Text>
          </View>
          <View>
            <Text>{(this.props.data.length>0)?this.props.data['Date_of_Birth__c']:""}</Text>
          </View>
        </View>
        <Hr />
        <View>
          <Text>mobile</Text>
        </View>
        <View>
          <Text>{(this.props.data.length>0)?this.props.data['MobilePhone']:""}</Text>
        </View>
      </View>
    );
  }
}

export default TqanzCustomerDetails;
