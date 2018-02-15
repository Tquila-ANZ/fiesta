import React, { Component } from "react";
import { View, Text } from "react-native";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
class RadioGroupItem {
    constructor(value, text) {
        this.value = value;
        this.text = text;
    }
}
class TqanzRadioButton extends Component {
    constructor(props) {
        super(props);
        this.renderGroup = (a) => {
            if (a === undefined)
                a = new Array();
            a.push(new RadioGroupItem(1, "Single"));
            a.push(new RadioGroupItem(1, "Double"));
            return a.map(info => (React.createElement(RadioButton, { value: info.value },
                React.createElement(Text, null, info.text))));
        };
        this.state = ({ radios: this.props.radios });
    }
    onSelect(index, value) {
        console.log(index);
        console.log(value);
        // this.setState({
        //     text: `Selected index: ${index} , value: ${value}`
        // })
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(RadioGroup, { onSelect: (index, value) => this.onSelect(index, value) }, this.renderGroup(this.props.radios))));
    }
}
export default TqanzRadioButton;
//# sourceMappingURL=index.js.map