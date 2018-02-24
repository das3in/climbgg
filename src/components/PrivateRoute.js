import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest, user}) => (
  <Route {...rest} render={(props) => (
    user.token === ''
    ? <Redirect to='/login' />
    : <Component {...props} user={user} />
    
  )} />
)


export default PrivateRoute;
