import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FiestaPicker from '../../tq-anz-picker';

class TqanzPropertyServicesBuildingHeight extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedOption: 'none', options: [], title: '' };
	}
	render() {
		const options = ['Single', 'Double', 'Triple', 'Split', 'High Set'];

		return (
			<View style={styles.container}>
				<FiestaPicker options={this.props.options} title={this.props.title} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 6
	},
	title: {
		fontWeight: 'bold',
		fontSize: 14
	}
});

export default TqanzPropertyServicesBuildingHeight;
