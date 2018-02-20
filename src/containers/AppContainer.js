import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getGoals } from '../actions/goals';
import App from '../App';

class AppContainer extends Component {
  render() {
    return (
      <App />
    )
  }
}

function mapStateToProps(state) {
  return {
    goals: state.goals
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getGoals}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
