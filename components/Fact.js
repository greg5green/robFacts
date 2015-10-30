'use strict';

import React, { Component, PropTypes, StyleSheet, Text } from 'react-native';

const propTypes = {
  fact: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  fact: {
    color: 'white',
    fontSize: 30,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
});

class Fact extends Component {
  render() {
    return <Text style={styles.fact}>{this.props.fact}</Text>;
  }
}

Fact.propTypes = propTypes;

export default Fact;
