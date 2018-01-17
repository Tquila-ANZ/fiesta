import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class TqanzAvatar extends Component {
	constructor(props) {
		super(props);
		this.state = { srcImage: this.props.srcImage};
	}
	render() {
		return (
			<View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.srcImage}}
          />
			</View>
		);
	}
}

export default TqanzAvatar;
