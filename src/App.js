import React, { Component } from 'react';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import GoalsList from './components/GoalsList';
import Plans from './Plans';
import Me from './Me';
import NewGoal from './components/NewGoal';
import LoadingSpinner from './components/loadingSpinner';
import { apiCall } from './utils/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: []
    }

    this.updateGoals = this.updateGoals.bind(this);
  }

  componentDidMount() {
    apiCall('get', 'goals').then(res => {
      this.setState({goals: res.goals})
    }).catch(err => {
      console.log(err.message)
    })
  }

  updateGoals(data) {
    let oldGoals = this.state.goals;
    oldGoals.unshift(data.goal);

    this.setState({goals: oldGoals})
  }

  render() {
    const { goals } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          {goals.length === 0 ? <LoadingSpinner /> : ''}
          <div className='container'>
            <Switch>
              <Route path='/' exact render={(props) => <GoalsList {...props} goals={goals} />} />
              <Route path='/plans' component={Plans} />
              <Route path='/me' component={Me} />
              <Route path='/goals/new'
                render={(props) =>
                  <NewGoal {...props} updateGoals={this.updateGoals} />
                } 
              />
              <Route render={() => <h1>Four oh Four.</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
