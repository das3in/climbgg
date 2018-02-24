import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { apiCall } from '../utils/api';
import GoalCard from './GoalCard';
import NewGoal from './NewGoal';
import NewGoalButton from './NewGoalButton';
import PrivateRoute from './PrivateRoute';
import LoadingSpinner from './loadingSpinner';

class GoalsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: []
    }

    this.updateGoals = this.updateGoals.bind(this);
  }

  componentDidMount() {
    apiCall('get', 'goals', {token: this.props.user.token}).then(res => {
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
        {goals.length === 0 ?
            <LoadingSpinner />
            :
            <ul className='cards'>
              {goals.map(goal => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </ul>
        }
        <PrivateRoute path='/goals/new' user={user} updateGoals={this.updateGoals} component={NewGoal} />
      </div>
    )
  }
}

export default GoalsList
