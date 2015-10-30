'use strict';

import React, { Component, StyleSheet, View } from 'react-native';
import Fact from './Fact';
import FactRefresh from './FactRefresh';

const styles = StyleSheet.create({
  container: {
    flex: 9
  }
});

class FactsContainer extends Component {
  constructor() {
    super();
    this.state = {
      fact: 'this is a super cool fact'
    };
  }

  onFactRefresh() {
    this.setState({ fact: 'This is another super cool fact' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Fact style={styles.fact} fact={this.state.fact} />
        <FactRefresh onFactRefresh={this.onFactRefresh.bind(this)} />
      </View>
    );
  }
}

export default FactsContainer;
