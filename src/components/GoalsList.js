import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { apiCall } from '../utils/api';
import GoalCard from './GoalCard';
import NewGoal from './NewGoal';
import NewGoalButton from './NewGoalButton';
import PrivateRoute from './PrivateRoute';

class GoalsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: []
    }

    this.updateGoals = this.updateGoals.bind(this);
  }

  componentDidMount() {
    apiCall('get', 'goals').then(res => {
      this.setState({goals: res.goals, isLoading: false})
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
    const { user } = this.props;
    return (
      <div>
        <Link to='/goals/new'>
          <NewGoalButton />
        </Link>
        <ul className='cards'>
          {goals.map(goal => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoalsList
