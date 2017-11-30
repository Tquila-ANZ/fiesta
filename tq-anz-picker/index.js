import React, { Component } from 'react';
import { View, Text, Picker, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import { SegmentedControls } from 'react-native-radio-buttons';

class TqanzPicker extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedOption: 'none', options: [], title: '' };
	}
	render() {
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
				<Text style={styles.title}>{this.props.title}</Text>
				<SegmentedControls
					options={this.props.options}
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

export default TqanzPicker;
