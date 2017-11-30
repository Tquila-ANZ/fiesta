import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class TqanzPropertyServicesRoomNumber extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container} >
				<Text style={styles.title}>Room number</Text>
				<TextInput style={styles.inputBox} />
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
	inputBox: {
		height: 40, borderColor: 'gray', borderWidth: 1
	}	
});

export default TqanzPropertyServicesRoomNumber;
