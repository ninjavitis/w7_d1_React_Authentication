import React from 'react';
import {Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NoMatch = () => (
  <Header as="h1" textAlign="center">
    You're lost, go
    <Link to="/"> Home</Link>
    </Header>
);

export default NoMatch;