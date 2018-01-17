import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TqanzCustomerDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {data: this.props.data, height: this.props.height, titleColor: this.props.titleColor, valueColor: this.props.valueColor};
	}
	render() {
		return (
			<View style={styles.inputsContainer}>
				<View style={{ height: 8 }}><Text>First name</Text></View>
				<View style={{ height: 8 }}><Text>{this.props.data["FirstName"]}</Text></View>
				<View style={{ height: 8 }}><Text>Surname</Text></View>
				<View style={{ height: 8 }}><Text>{this.props.data["LastName"]}</Text></View>
				<View style={{ height: 8 }}><Text>Gender</Text></View>
				<View style={{ height: 8 }}><Text>{this.props.data["Gender__c"]}</Text></View>
				<View style={{ height: 8 }}><Text>Date of Birth</Text></View>
				<View style={{ height: 8 }}><Text>{this.props.data["Date_of_Birth__c"]}</Text></View>
				<View style={{ height: 8 }}><Text>mobile</Text></View>
				<View style={{ height: 8 }}><Text>{this.props.data["MobilePhone"]}</Text></View>
			</View>
		);
	}
}

export default TqanzCustomerDetails;