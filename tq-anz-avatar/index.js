import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import FontAwesome, {Icons} from 'react-native-fontawesome';

class TqanzAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = { srcImage: this.props.srcImage};
    }
    render() {
        let image = <FontAwesome style={{fontSize: 62, marginLeft: 8}}>{Icons.addressCard}</FontAwesome>;

        if(this.props.srcImage){
            image = <Image
                style={styles.avatar}
                source={{uri: this.props.srcImage}}
            />
        }

        return (
            <View style={styles.avatarContainer}>
                {image}
            </View>
        );
    }
}

export default TqanzAvatar;
