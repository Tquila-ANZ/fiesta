import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FiestaMap from '../tq-anz-map';

class TqanzAddress extends Component {
	constructor(props) {
        super(props);
	}
	render() {
		return (
			<View>
				<FiestaMap />
				<Text>Address</Text>
			</View>
		);
	}
}

export default TqanzAddress;
