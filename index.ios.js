'use strict';

import React, { AppRegistry, Component, StyleSheet, View } from 'react-native';
import Header from './components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
});

class RobFacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

AppRegistry.registerComponent('robFacts', () => RobFacts);
