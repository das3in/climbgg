import React, { Component } from 'react';
import Navbar from './components/navbar';
import GoalsList from './components/GoalsList';
import LoadingSpinner from './components/loadingSpinner';
import NewGoalButton from './components/NewGoalButton';
import { apiCall } from './utils/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: []
    }
  }

  async componentDidMount() {
    apiCall('get', 'goals').then(res => {
      this.setState({goals: res.goals})
    }).catch(err => {
      console.log(err.message)
    })
  }

  render() {
    const { goals } = this.state;
    return (
      <div>
        <Navbar />
        <NewGoalButton />
        {goals.length === 0 ? 
          <LoadingSpinner />
          :
          <div className="container">
            <GoalsList goals={goals} />
          </div>
        }
      </div>
    );
  }
}

export default App;
