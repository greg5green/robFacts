'use strict';

import React, { Component, PropTypes, ScrollView, StyleSheet, View } from 'react-native';
import Fact from './Fact';
import FactRefresh from './FactRefresh';

const propTypes = {
  fact: PropTypes.string.isRequired,
  onFactRefresh: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 9
  },
  factRefresh: {
    flex: 9
  },
});

class Facts extends Component {
  componentWillMount() {
    this.props.onFactRefresh();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView styles={styles.scrollView}>
          <Fact fact={this.props.fact} />
        </ScrollView>
        <FactRefresh onFactRefresh={this.props.onFactRefresh} />
      </View>
    );
  }
}

Facts.propTypes = PropTypes;

export default Facts;
