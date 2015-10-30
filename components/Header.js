'use strict';

import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: 'white',
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 42,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

class Header extends Component {
  render() {
    return <Text style={styles.header}>#RobFacts</Text>;
  }
}

export default Header;
