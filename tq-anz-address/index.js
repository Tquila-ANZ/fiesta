import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TqanzAddress extends Component {
	constructor(props) {
		super(props);
		this.state = { address: this.props.address};
	}
	render() {
		return (
			<View style={{		justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingLeft: 22, paddingRight: 22}}>
				     <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{flex: 1, padding: 18}}>
            <Text style={{color: this.props.titleColor}}>City</Text>
			<Text style={{color: this.props.valueColor}}>{this.props.address['sked__Job__r']['sked__Address__c']}</Text>
          </View>
          <View style={{flex: 1, padding: 18}}>
            <Text style={{color: this.props.titleColor}}>Postcode</Text>
			<Text style={{color: this.props.valueColor}}>{this.props.address['sked__Job__r']['sked__Address__c']}</Text>
          </View>
        </View>
			</View>
		);
	}
}

export default TqanzAddress;
