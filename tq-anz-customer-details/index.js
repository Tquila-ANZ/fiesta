import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TqanzCustomerDetails extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// Based off a object only
		const dataLoopObj = (data, keyName, uiName = null) => {
			return (
				<View style={{ flexDirection: 'row', flex: 1 }}>
					<View style={styles.wordContainer}>
						<Text>
							{uiName ? uiName : keyName}:{' '}
						</Text>
					</View>
					<View style={styles.item2}>
						<Text>
							{data[keyName]}
						</Text>
					</View>
				</View>
			);
		};

		return (
			<View style={styles.inputsContainer}>
				{dataLoopObj(this.props.data, this.props.keyName, this.props.uiName)}
			</View>
		);
	}
}

export default TqanzCustomerDetails;
