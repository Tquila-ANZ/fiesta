import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight, FlatList, Image} from 'react-native';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render(props) {
        SetTwoLines = (props) => {
            return <View>
                <Text style={{color: "black", fontWeight: 'bold'}}>{this.props.name}</Text>
                <Text style={{color: "black"}}>{this.props.value}</Text>
            </View>;
        }

        SetOneLine = (props) => {
            return <View style={{flexDirection: 'row', flex: 1}}>
                <Text style={{color: "black", fontWeight: 'bold'}}>{this.props.name}</Text>
                <Text style={{color: "black"}}>{this.props.value}</Text>
            </View>;
        }

        SetView = (view) => {
            if (view.isTwoLines === true) {
                return <SetTwoLines/>
            } else {
                return <SetOneLine/>
            }
        }

        return (<SetView isTwoLines={this.props.twoLines}></SetView>);
    }
}

export default Details;


