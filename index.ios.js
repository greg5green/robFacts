'use strict';

import React, { AppRegistry, Component, StyleSheet, View, StatusBarIOS } from 'react-native';
import App from './components/App';

class RobFacts extends Component {
  render() {
    StatusBarIOS.setStyle('light-content', true);

    return <App />;
  }
}

AppRegistry.registerComponent('robFacts', () => RobFacts);
