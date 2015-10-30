'use strict';

import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  fact: {
    color: 'white',
    flex: 1,
    fontSize: 30,
    textAlign: 'center'
  }
});

class Fact extends Component {
  render() {
    return <Text style={styles.fact}>{this.props.fact}</Text>;
  }
}

export default Fact;
