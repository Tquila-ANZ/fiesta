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
          <View style={{flex: 1, padding: 18}}>
            <Text style={{color: this.props.titleColor}}>First name</Text>
			<Text style={{color: this.props.valueColor}}>{this.props.data['FirstName']}</Text>
          </View>
          <View style={{flex: 1, padding: 18}}>
            <Text style={{color: this.props.titleColor}}>Surname</Text>
			<Text style={{color: this.props.valueColor}}>{this.props.data['LastName']}</Text>
          </View>
        </View>
        <Hr />
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{flex: 1, padding: 18}}>
            <Text style={{color: this.props.titleColor}}>Gender</Text>
			<Text style={{color: this.props.valueColor}}>{this.props.data['Gender__c']}</Text>
          </View>
          <View style={{flex: 1, padding: 18}}>
            <Text style={{color: this.props.titleColor}}>Date of Birth</Text>
			<Text style={{color: this.props.valueColor}}>{this.props.data['Date_of_Birth__c']}</Text>
          </View>
        </View>
        <Hr />
        <View style={{flex: 1, padding: 18}}>
          <Text style={{color: this.props.titleColor}}>mobile</Text>
          <Text style={{color: this.props.valueColor}}>{(this.props.data.length>0)?this.props.data['MobilePhone']:""}</Text>
        </View>
      </View>
    );
  }
}

export default TqanzCustomerDetails;
