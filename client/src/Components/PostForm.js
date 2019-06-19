import React from 'react';
import axios from 'axios'
import {Form } from 'semantic-ui-react'

class PostForm extends React.Component {
  DefaultValues ={title:"", body:""}
  state = { ...this.DefaultValues }

  handleChange=(e, {name,value})=>{
    this.setState({[name]:value})
  }

  handleSubmit=(e)=>{

  }

  render() {
    const {title, body} = this.state

    return (
      <Form>
        <Form.Input label="title" placeholder="title" name="title" value={title} onChange={this.handleChange} required autofocus />
        <Form.Input label="body" placeholder="body" name="body" value={body} required  />
        <Form.Button color="blue">Submit</Form.Button> 
      </Form>
    );
  }
}

export default PostForm;