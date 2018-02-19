import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Accordion from './Accordion';

class TqanzAccordion extends Component {
	constructor(props) {
		super(props);
    this.styles = {
      ...defaultStyles,
      ...props.styles
		};
	}
	renderHeader(info) {
		return (
			<View style={this.styles.tq_accordion_header}>
				<Text style={this.styles.tq_accordion_header_text}>
					{info}
				</Text>
			</View>
		);
	}

	render() {
    const styles = this.styles;
		return (
			<View style={styles.tq_accordion_container}>
				<Accordion
					styles={styles}
					items={this.props.items}
					headerRender={this.renderHeader}
					contentRender={this.renderContent}
					headerName="name"
					contentName="description"
					maxHeight={490}
					duration={200}
					backgroundColor={'#fff'}
				/>
			</View>
		);
	}
}

const defaultStyles = {
	tq_accordion_container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f1f1f1'
	},
	tq_accordion_header: {
		padding: 10,
    backgroundColor: '#fff',
	},
	tq_accordion_header_text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
};

export default TqanzAccordion;
