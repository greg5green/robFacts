'use strict';

import React, { Component, PropTypes, StyleSheet, Text, TouchableOpacity } from 'react-native';

const propTypes = {
  onFactRefresh: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  refresh: {
    color: '#0278f8',
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '300',
    marginTop: 15,
    textAlign: 'center',
  }
});

class FactRefresh extends Component {
  render() {
    return (
      <Text onPress={this.props.onFactRefresh} style={styles.refresh}>Give Me Another</Text>
    );
  }
}

FactRefresh.propTypes = propTypes;

export default FactRefresh;
