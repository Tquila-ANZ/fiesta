import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TqanzAddress extends Component {
	constructor(props) {
		super(props);
		this.state = { address: this.props.address};
	}
	render() {
		return (
			<View>
				<Text>{this.props.address}</Text>
			</View>
		);
	}
}

export default TqanzAddress;
