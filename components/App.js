'use strict';

import React, {  Component, StyleSheet, View, StatusBarIOS } from 'react-native';
import FactContainer from './FactContainer';
import Header from './Header';

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#292728',
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20
  }
});

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.app}>
        <Header />
        <FactContainer {...this.props} />
      </View>
    );
  }
}

export default App;
