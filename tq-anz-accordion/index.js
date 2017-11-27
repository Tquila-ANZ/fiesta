import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Accordion from './Accordion';

// Possible Subitems for an accordion
// PROPERTY SERVICES
import FiestaCause from '../tq-anz-property-services/tq-anz-cause';
import FiestaBuildingHeight from '../tq-anz-property-services/tq-anz-building-height';


class TqanzAccordion extends Component {

  constructor(props) {
    super(props);
  }
  renderHeader(info) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{info}</Text>
      </View>
    );
  }
  renderContent(info) {
    debugger;
    // For Report Order Details
    let cause = undefined;
    let buildingHeight = undefined;
    if(info === 'reportorderdetails') {
      cause = <FiestaCause />;
      buildingHeight = <FiestaBuildingHeight />
    }
    return (
      <View style={styles.content}>
        {(cause)?cause:undefined}   
        {(buildingHeight)?buildingHeight:undefined} 
      </View>
    );
  }
  render() {
    return (
      <View style={styles.example}>
        <Accordion
          style={styles.accordion}
          items = {this.props.items}
          headerRender = {this.renderHeader}
          contentRender = {this.renderContent}
          headerName = "name"
          contentName = "description"
          maxHeight = {490}
          duration = {200}
          backgroundColor = {'#fff'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  example: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
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
    backgroundColor: '#fff'
  },
  headerText: {
  },
  contentText: {
  }
});

export default TqanzAccordion;