import React from 'react';
import {Container} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import NoMatch from './Components/NoMatch'
import FetchUser from './Components/FetchUser'


const App = () => {
  return(
    <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
  )
};

export default App;
