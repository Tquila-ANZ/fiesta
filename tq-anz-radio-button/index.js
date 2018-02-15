import React, { Component } from "react";
import { Button, View, TouchableHighlight, Text } from "react-native";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

class TqanzRadioButton extends Component {
    onSelect(index, value){
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render(){
        return(
            <View>

                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value)}
                >
                    <RadioButton value={'item1'} >
                        <Text>This is item #1</Text>
                    </RadioButton>

                    <RadioButton value={'item2'}>
                        <Text>This is item #2</Text>
                    </RadioButton>

                    <RadioButton value={'item3'}>
                        <Text>This is item #3</Text>
                    </RadioButton>
                </RadioGroup>
                
            </View>
        )
    }
}

export default TqanzRadioButton;
