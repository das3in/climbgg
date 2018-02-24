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
//import LoadingSpinner from './components/loadingSpinner';
import { apiCall } from './utils/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        summonerName: '',
        token: localStorage.getItem('userToken') || '',
      },
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name] : e.target.value})
  }

  handleLogin(e) {
    e.preventDefault();
    let data = {
      'auth': {
        email: this.state.email,
        password: this.state.password
      }
    }

    apiCall('post', 'user_token', {data: data}).then(res => {
      localStorage.setItem('userToken', res.jwt)

      let newState = Object.assign({}, this.state, {
        email: '',
        password: '',
        user: {
          token: res.jwt
        }
      })

      this.setState(newState)
    })
  }

  render() {
    const { user, email, password } = this.state;

    return (
      <Router>
        <div>
          {user.token !== '' ? <Navbar /> : '' }
          <div className='container'>
            <Switch>
              <Route
                path='/login'
                render={(props) => 
                    <Login 
                      email={email}
                      password={password}
                      handleChange={this.handleChange}
                      handleLogin={this.handleLogin}
                      user={user}
                    />}
                  />
              <PrivateRoute path='/' user={user} exact component={GoalsList} />
              <PrivateRoute path='/goals' user={user} component={GoalsList} />
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
