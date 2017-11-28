import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Accordion from './Accordion';

// Possible Subitems for an accordion
// PROPERTY SERVICES
import FiestaCause from '../tq-anz-property-services/tq-anz-cause';
import FiestaBuildingHeight from '../tq-anz-property-services/tq-anz-building-height';
import FiestaRoomNumber from '../tq-anz-property-services/tq-anz-room-number';
import FiestaConstruction from '../tq-anz-property-services/tq-anz-construction';
import FiestaRoofType from '../tq-anz-property-services/tq-anz-roof-types';
import FiestaSubFloor from '../tq-anz-property-services/tq-anz-sub-floor';
import FiestaBuildingAge from '../tq-anz-property-services/tq-anz-building-age';
import FiestaSafeRepairWorkingHeights from '../tq-anz-property-services/tq-anz-safe-repair-working-heights';
import FiestaPotentialRisks from '../tq-anz-property-services/tq-anz-potential-risks';
import FiestaProceeding from '../tq-anz-property-services/tq-anz-proceeding';
import FiestaNotProceeding from '../tq-anz-property-services/tq-anz-not-proceeding';

class TqanzAccordion extends Component {
	constructor(props) {
		super(props);
	}
	renderHeader(info) {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>
					{info}
				</Text>
			</View>
		);
	}
	renderContent(info) {
		// ------------------------------
		// For Report Order Details
		// ------------------------------

		let cause = undefined;
		let buildingHeight = undefined;
		let roomNumber = undefined;
		let construction = undefined;
		let roofType = undefined;
		let subFloor = undefined;
		let buildingAge = undefined;
		let safeRepairWorkingHeights = undefined;
		let potentialRisks = undefined;
		let proceeding = undefined;
		let notProcessing = undefined;

		if (info === 'reportorderdetails') {
			cause = <FiestaCause />;
			buildingHeight = <FiestaBuildingHeight />;
			roomNumber = <FiestaRoomNumber />;
			construction = <FiestaConstruction />;
			roofType = <FiestaRoofType />;
			subFloor = <FiestaSubFloor />;
			buildingAge = <FiestaBuildingAge />;
			safeRepairWorkingHeights = <FiestaSafeRepairWorkingHeights />;
			potentialRisks = <FiestaPotentialRisks />;
			proceeding = <FiestaProceeding />;
			notProcessing = <FiestaNotProceeding />;
		}

		// ------------------------------

		return (
			<View style={styles.content}>
				{cause ? cause : undefined}
				{buildingHeight ? buildingHeight : undefined}
				{roomNumber ? roomNumber : undefined}
				{construction ? construction : undefined}
				{roofType ? roofType : undefined}
				{subFloor ? subFloor : undefined}
				{buildingAge ? buildingAge : undefined}
				{safeRepairWorkingHeights ? safeRepairWorkingHeights : undefined}
				{potentialRisks ? potentialRisks : undefined}
				{proceeding ? proceeding : undefined}
				{notProcessing ? notProcessing : undefined}
			</View>
		);
	}
	render() {
		return (
			<View style={styles.example}>
				<Accordion
					style={styles.accordion}
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

const styles = StyleSheet.create({
	example: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f1f1f1'
	},
	accordion: {
		borderTopWidth: 1,
		borderTopColor: '#666'
	},
	content: {
		padding: 10,
		backgroundColor: '#fff'
	},
	header: {
		padding: 10,
    backgroundColor: '#fff',
	},
	headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
	contentText: {}
});

export default TqanzAccordion;
