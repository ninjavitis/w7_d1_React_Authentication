import React from 'react';
import {Route, Redirect} from "react-router-dom"
import {AuthConsumer} from "../Providers/AuthProvider"

const ProtectedRoute = ({component: Component, ...rest}) => (
  <AuthConsumer>
    {authObj =>
      <Route 
        {...rest}
        render={ props => (
          authObj.authenticated ?
          <Component{...props}/>
          :
          <Redirect to={{
            pathname: "/login",
            state: { from: props.location}
          }}
        />
      )}
    />
    }
  </AuthConsumer>
);

export default ProtectedRoute;