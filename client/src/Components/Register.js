import React from 'react';
import {AuthConsumer} from '../Providers/AuthProvider'
import {Form, Button, Header, Segment} from 'semantic-ui-react'

class Register extends React.Component {
  state = { name:"", nickname:"", image:"", email:'', password:'', passwordConfirmation:'' }
  
  handleChange=(e)=>{
    const {name, value} =e.target
    this.setState({[name]:value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    // Destructure state
    const {name, nickname, image, email, password, passwordConfirmation} = this.state

    // destructure the auth object provided via AuthConsumer
    const {auth: {handleRegister}, history} = this.props
    

    if (password === passwordConfirmation){
      handleRegister({ name, nickname, image, email, password, passwordConfirmation}, history)
    } else {
      alert('Passwords must match')
    }
  }
  
  render() {
    const {name, nickname, image, email, password, passwordConfirmation} =this.state
    return (
      <Segment basic>
        <Header as="h1" textAlign="center">Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
          label="Name"
          required
          autoFocus
          name='name'
          value={name}
          placeholder='name'
          onChange={this.handleChange}
          />
          <Form.Input 
          label="Nickname"
          required
          name='nickname'
          value={nickname}
          placeholder='nickname'
          onChange={this.handleChange}
          />
          <Form.Input 
          label="Image"
          required
          name='image'
          value={image}
          placeholder='image'
          onChange={this.handleChange}
          />
          <Form.Input 
          label="Email"
          required
          name='email'
          value={email}
          placeholder='email'
          onChange={this.handleChange}
          />
          <Form.Input 
          label="Password"
          required
          name='password'
          value={password}
          placeholder='12 chars, 1 upper, 1 symbol'
          onChange={this.handleChange}
          />
          <Form.Input 
          label="Confirm Password"
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          placeholder=''
          onChange={this.handleChange}
          />

          <Button primary type='submit'>Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default class ConnectedRegister extends React.Component{
  render(){
    return(
      <AuthConsumer>
        {auth=><Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}