import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { apiCall } from '../utils/api';
import ChoseCategory from './ChoseCategory';
import GoalForm from './GoalForm';

const categories = [
  {name: "Minions", id: 1},
  {name: "KDA", id: 2},
  {name: "Gold", id: 3},
  {name: "Objectives", id: 4},
  {name: "Vision", id: 5},
  {name: "Teamwork", id: 6},
  {name: "Custom", id: 7},
  {name: "Games", id: 8},
]

class NewGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      goal: '',
      interval: '',
      category: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let category = this.props.history.location.pathname.split('/')[3]
    const data = {
      goal: {
        item: this.state.item,
        goal: this.state.goal,
        interval: this.state.interval,
      },
      category: {
        name: category
      }
    }
    apiCall('post', 'goals', {data: data, token: this.props.user.token}).then(res => {
      this.props.history.push('/');
      this.props.updateGoals(res);
    })
  }

  render() {
    return (
      <div className='modal'>
        <div className='navbar new-goal'>
          <Link to='/' className='close-modal'>X</Link>
          <h2 className='new-goal-header'>Create new Goal</h2>
        </div>
        <div className='container new-goal'>
          <Route exact 
            path='/goals/new' 
            render={(props) => <ChoseCategory {...props} categories={categories} />} />
          <Route 
            path='/goals/new/:category'
            render={(props) => <GoalForm {...props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} values={this.state} />} />
        </div>
      </div>
    )
  }
}

export default withRouter( NewGoal );
