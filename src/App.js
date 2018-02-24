import React, { Component } from 'react';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import GoalsList from './components/GoalsList';
import Plans from './Plans';
import Me from './Me';
import LoadingSpinner from './components/loadingSpinner';
//import { apiCall } from './utils/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        summonerName: '',
        token: '',
      },
    }
  }

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div>
          {user.token !== '' ? <Navbar /> : '' }
          {user.token !== '' ? <LoadingSpinner /> : ''}
          <div className='container'>
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute path='/' user={user}  exact component={GoalsList} />
              <PrivateRoute path='/plans' user={user} component={Plans} />
              <PrivateRoute path='/me' user={user}  component={Me} />
              <Route render={() => <h1>Four oh Four.</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
