import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class TqanzAvatar extends Component {
	render() {
		return (
			<View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={this.props.srcImage}
          />
			</View>
		);
	}
}

export default TqanzAvatar;
