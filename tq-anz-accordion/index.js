import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Accordion from './Accordion';

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
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{info}</Text>
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
          maxHeight = {90}
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