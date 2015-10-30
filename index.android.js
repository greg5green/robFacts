'use strict';

import React, { AppRegistry, Component } from 'react-native';
import { Provider } from 'react-redux/native';
import { createStore } from 'redux';
import AppContainer from './components/AppContainer';
import robFacts from './reducers';

const store = createStore(robFacts);

class RobFacts extends Component {
  render() {
    return (
      <Provider store={store}>
        {function() { return <AppContainer />}}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('robFacts', () => RobFacts);
