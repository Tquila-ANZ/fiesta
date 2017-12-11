import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TqanzCustomerDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {data: this.props.data};
	}
	render() {
		// Based off a object only
		const dataLoopObj = (data, keyName, uiName = null) => {
			return (
				<View>
					<Text style={{ fontSize: 22 }}>
						{uiName ? uiName : keyName}:  {data[keyName]}
					</Text>
				</View>
			);
		};

		return (
			<View style={styles.inputsContainer}>
				{dataLoopObj(this.props.data, this.props.keyName, this.props.uiName)}
				<View style={{ height: 8 }} />
			</View>
		);
	}
}

export default TqanzCustomerDetails;
