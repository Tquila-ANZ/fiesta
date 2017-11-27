import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TqanzCopyright extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', version: '0.0' };
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.copyright}>
					<Text>
						© Copyright {this.props.name} {getCopyrightYear()} - Version {this.props.version}
					</Text>
				</View>
			</View>
		);
	}
}

export default TqanzCopyright;
