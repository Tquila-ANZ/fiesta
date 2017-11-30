import React, { Component } from 'react';
import { View, Text, Picker, TouchableWithoutFeedback, styles } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import { SegmentedControls } from 'react-native-radio-buttons';

class TqanzPropertyServicesBuildingHeight extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedOption: 'none' };
	}
	render() {
		const options = ['Single', 'Double', 'Triple', 'Split', 'High Set'];
		function setSelectedOption(selectedOption) {
			this.setState({
				selectedOption
			});
		}
		function renderOption(option, selected, onSelect, index) {
			const style = selected ? { fontWeight: 'bold' } : {};

			return (
				<TouchableWithoutFeedback onPress={onSelect} key={index}>
					<View>
						<Text style={style}>
							{option}
						</Text>
					</View>
				</TouchableWithoutFeedback>
			);
		}
		function renderContainer(optionNodes) {
			return (
				<View>
					{optionNodes}
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Building Height</Text>
				<SegmentedControls
					options={options}
					onSelection={setSelectedOption.bind(this)}
					selectedOption={this.state.selectedOption}
				/>
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
