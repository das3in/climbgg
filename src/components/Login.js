import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    const { user, email, password, handleChange, handleLogin} = this.props
    return (
      <div>
        {user.token === '' ?
            <div className='modal'>
              <div className='modal-container'>
                <form onSubmit={handleLogin}>
                  <h2>Login</h2>
                  <label>Email</label>
                  <input type='email' name='email' value={email} onChange={handleChange} />
                  <br />
                  <label>Password</label>
                  <input type='password' name='password' value={password} onChange={handleChange} />
                  <br />
                  <input type='submit' value='Submit' />
                </form>
              </div>
            </div>
            :
            <Redirect to='/' />
        }
      </div>
    )
  }
}

export default Login;
