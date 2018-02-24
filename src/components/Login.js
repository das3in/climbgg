import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    const { user, email, password, handleChange, handleLogin} = this.props
    return (
      <div>
        {user.token === '' ?
            <div>
              <h2>Login Form</h2>
              <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type='email' name='email' value={email} onChange={handleChange} />
                <br />
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleChange} />
                <br />
                <input type='submit' value='Submit' />
              </form>
            </div>
            :
            <Redirect to='/' />
        }
      </div>
    )
  }
}

export default Login;
