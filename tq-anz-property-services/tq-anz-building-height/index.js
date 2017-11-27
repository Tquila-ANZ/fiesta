import React, { Component } from 'react';
import { View, Text, Picker, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import { SegmentedControls } from 'react-native-radio-buttons';
//import styles from './styles';

class TqanzPropertyServicesBuildingHeight extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedOption: 'none' };
	}
	render() {
		const options = ['Option 1', 'Option 2'];

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
			<View style={{ margin: 20 }}>
				{/* <RadioButtons
					options={options}
					onSelection={setSelectedOption.bind(this)}
					selectedOption={this.state.selectedOption}
					renderOption={renderOption}
					renderContainer={renderContainer}
				/>
				<Text>
					Selected option: {this.state.selectedOption || 'none'}
				</Text> */}
				<Text>
					Building Height
				</Text> 
				<SegmentedControls
					options={options}
					onSelection={setSelectedOption.bind(this)}
					selectedOption={this.state.selectedOption}
				/>
			</View>
		);
	}
}

export default TqanzPropertyServicesBuildingHeight;
