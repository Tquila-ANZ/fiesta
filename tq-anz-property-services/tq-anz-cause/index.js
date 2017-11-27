import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TqanzPropertyServicesCause extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Picker
				selectedValue={this.state.cause}
				onValueChange={(itemValue, itemIndex) => this.setState({ cause: itemValue })}
			>
				<Picker.Item label="Roof Water Damage" value="RoofWaterDamage" />
				<Picker.Item label="Wind" value="Wind" />
				<Picker.Item label="Impact Storm" value="ImpactStorm" />
				<Picker.Item label="Non-Impact Storm" value="NonImpactStorm" />
				<Picker.Item label="Other" value="Other" />
			</Picker>
		);
	}
}

export default TqanzPropertyServicesCause;
