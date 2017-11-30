import React, { Component, StyleSheet } from 'react';
import { View, Text } from 'react-native';

class TqanzPropertyServicesConstruction extends Component {
	constructor(props) {
		super(props);
		this.state = { options: [], title: '' };
	}
	render() {
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
		fontSize: 18,
		paddingBottom: 2
	},
});

export default TqanzPropertyServicesConstruction;
