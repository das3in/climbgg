import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest, user}) => {
  return (
    <Route {...rest} render={(props) => (
      user.token === ''
      ? <Redirect to='/login' />
      : <Component {...rest} user={user} />

    )} />
  )}


export default PrivateRoute;
