import React from 'react';
import {AuthConsumer} from '../Providers/AuthProvider'
import { Button, Form, Segment, Header} from 'semantic-ui-react'


class Login extends React.Component {
  state = { email:"", password:"" }
  
  handleChange=(e)=>{
    const {name, value} = e.target
    this.setState({[name]:value})
  }
  
  handleSubmit=(e)=>{
    e.preventDefault()
    const {email, password} = this.state
    this.props.auth.handleLogin({email, password}, this.props.history)
  }

  render() {
    const {email, password} = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'></Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
          label="email"
          autoFocus
          required
          name="email"
          value={email}
          placeholder="you@arethebest.com"
          onChange={this.handleChange}
          />
          <Form.Input 
          label="password"
          required
          name="password"
          value={password}
          placeholder="password"
          onChange={this.handleChange}
          />
          <Segment basic textAlign="center">
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default class ConnectedLogin extends React.Component{
  render(){
    return(
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth}></Login>}
      </AuthConsumer>
    )
  }
}