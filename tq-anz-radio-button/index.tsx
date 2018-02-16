import React, { Component } from "react";
import { View, Text } from "react-native";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

interface IRadioGroupItem {
    value: any,
    text: string
}

interface props {
    radios: Array<RadioGroup>
}

interface state {
    radios: Array<RadioGroup>
}

class RadioGroupItem implements IRadioGroupItem {
    constructor(
        public value: any,
        public text: string
    ){}
}

class TqanzRadioButton extends Component<props, state> {
    constructor(props) {
        super(props);
        this.state = ({ radios: this.props.radios});

    }
    onSelect(index, value){
        console.log(index);
        console.log(value);
        // this.setState({
        //     text: `Selected index: ${index} , value: ${value}`
        // })
    }

    protected renderGroup = (a: Array<RadioGroupItem>) => {
        if(a===undefined)
            a = new Array<RadioGroupItem>();

        // FOR TESTING
        // a.push(new RadioGroupItem(1, "Single"));
        // a.push(new RadioGroupItem(1, "Double"));

        return a.map(info => (
            <RadioButton key={info.value} value={info.value} >
                <Text key={info.text}>{info.text}</Text>
            </RadioButton>
        ));
    }

    render(){
        return(
            <View>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value)}
                >
                    {this.renderGroup(this.props.radios)}
                    {/*<RadioButton value={'item1'} >*/}
                        {/*<Text>This is item #1</Text>*/}
                    {/*</RadioButton>*/}

                    {/*<RadioButton value={'item2'}>*/}
                        {/*<Text>This is item #2</Text>*/}
                    {/*</RadioButton>*/}

                    {/*<RadioButton value={'item3'}>*/}
                        {/*<Text>This is item #3</Text>*/}
                    {/*</RadioButton>*/}
                </RadioGroup>

            </View>
        )
    }
}

export default TqanzRadioButton;
