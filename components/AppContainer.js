'use strict';

import { connect } from 'react-redux/native';
import { newFact } from '../actions';
import App from './App';

function mapStateToProps(state) {
  return { fact: state.fact };
}

function mapDispatchToProps(dispatch) {
  return {
    onFactRefresh: () => dispatch(newFact())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
