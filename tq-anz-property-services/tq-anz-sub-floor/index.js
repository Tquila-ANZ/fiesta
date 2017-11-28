import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
//import styles from './styles';

class TqanzPropertySubFloor extends Component {
	constructor(props) {
        super(props);
        this.state = {cause: 'RoofWaterDamage'};
	}
	render() {
		return (
			<View>
				<Text>Sub floor</Text>
			</View>
		);
	}
}

export default TqanzPropertySubFloor;
