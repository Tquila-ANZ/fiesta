import React, {Component} from 'react';
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

export default class TqanzDropDown extends Component<props, state> {
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

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }

    _usa(state) {
        this.setState({
            ...this.state,
            usa: state
        });
    }

    _canada(province) {


        this.setState({
            ...this.state,
            canada: province
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Select
                    width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList.bind(this)}
                    defaultValue="Select a Province in Canada ..."
                    onSelect={this._canada.bind(this)}>
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
