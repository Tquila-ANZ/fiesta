import * as React from 'react';
import {View} from 'react-native';
import DropDown from 'react-native-dropdown';

const {
    Select,
    Option,
    updatePosition
} = DropDown;

interface props {
}

interface state {
}

export default class TqanzDropDown extends React.Component<props, state> {
    constructor(props) {
        super(props);

        this.state = {
            canada: '',
            usa: ''
        };
    }

    componentDidMount() {
        updatePosition(this.refs['SELECT1']);
    }

    onChangeHandler(province) {
        this.setState({
            ...this.state,
            canada: province
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Select
                    width={250}
                    ref="SELECT1"
                    defaultValue="Select ..."
                    onSelect={this.onChangeHandler.bind(this)}>
                    <Option>Alberta</Option>
                    <Option>British Columbia</Option>
                    <Option>Manitoba</Option>
                    <Option>New Brunswick</Option>
                    <Option>Newfoundland and Labrador</Option>
                    <Option>Northwest Territories</Option>
                    <Option>Nova Scotia</Option>
                    <Option>Nunavut</Option>
                    <Option>Ontario</Option>
                    <Option>Prince Edward Island</Option>
                    <Option>Quebec</Option>
                    <Option>Saskatchewan</Option>
                    <Option>Yukon</Option>
                </Select>

            </View>
        );
    }
}
