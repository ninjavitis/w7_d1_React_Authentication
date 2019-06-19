import React from 'react';
import axios from 'axios'
import {Form } from 'semantic-ui-react'
import {AuthConsumer} from '../Providers/AuthProvider'

class PostForm extends React.Component {
  DefaultValues ={title:"", body:""}
  state = { ...this.DefaultValues }

  handleChange=(e, {name,value})=>{
    this.setState({[name]:value})
  }

  handleSubmit=(e)=>{
    const post = this.state
    axios.post(`/api/posts`, post)
      .then(()=>{this.setState(this.DefaultValues)
    })
    .catch(err=>console.log(err))
  }

  render() {
    const {title, body} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label="title" placeholder="title" name="title" value={title} onChange={this.handleChange} required autoFocus />
        <Form.Input label="body" placeholder="body" name="body" value={body} onChange={this.handleChange} required  />
        <Form.Button color="blue">Submit</Form.Button> 
      </Form>
    );
  }
}

export default class ConnectedPostForm extends React.Component{
  render(){
    return(
      <AuthConsumer>
        {auth => <PostForm {...this.props} auth={auth}></PostForm>}
      </AuthConsumer>
    )
  }
}