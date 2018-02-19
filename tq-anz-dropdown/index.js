import * as React from 'react';
import { View } from 'react-native';
import DropDown from 'react-native-dropdown';
const { Select, Option, updatePosition } = DropDown;
export default class TqanzDropDown extends React.Component {
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
        this.setState(Object.assign({}, this.state, { canada: province }));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
            React.createElement(Select, { width: 250, ref: "SELECT1", defaultValue: "Select ...", onSelect: this.onChangeHandler.bind(this) },
                React.createElement(Option, null, "Alberta"),
                React.createElement(Option, null, "British Columbia"),
                React.createElement(Option, null, "Manitoba"),
                React.createElement(Option, null, "New Brunswick"),
                React.createElement(Option, null, "Newfoundland and Labrador"),
                React.createElement(Option, null, "Northwest Territories"),
                React.createElement(Option, null, "Nova Scotia"),
                React.createElement(Option, null, "Nunavut"),
                React.createElement(Option, null, "Ontario"),
                React.createElement(Option, null, "Prince Edward Island"),
                React.createElement(Option, null, "Quebec"),
                React.createElement(Option, null, "Saskatchewan"),
                React.createElement(Option, null, "Yukon"))));
    }
}
//# sourceMappingURL=index.js.map