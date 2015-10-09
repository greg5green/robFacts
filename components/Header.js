'use strict';

import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontFamily: 'Helvetica Neue',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 24,
    textAlign: 'center'
  }
});

class Header extends Component {
  render() {
    return <Text style={styles.header}>#RobFacts</Text>;
  }
}

export default Header;
