'use strict';

import React, {  Component, StyleSheet, View, StatusBarIOS } from 'react-native';
import FactsContainer from './FactsContainer';
import Header from './Header';

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#292728',
    flex: 1,
    flexDirection: 'column',
    padding: 30
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Header />
        <FactsContainer />
      </View>
    );
  }
}

export default App;
