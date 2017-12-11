import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FiestaMap from '../tq-anz-map';

class TqanzAddress extends Component {
	constructor(props) {
		super(props);
		this.state = { address: this.props.address, showMap: true};
	}
	render() {
		return (
			<View>
				<FiestaMap />
				<Text>{this.props.address}</Text>
			</View>
		);
	}
}

export default TqanzAddress;
