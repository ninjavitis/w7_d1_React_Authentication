import React,{useState, useEffect} from 'react';
import {Form, Table, Header, Button, Icon} from 'semantic-ui-react'
import axios from 'axios';

const Post = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // we dont want to stomp over the state if the user desides to cancel mid-edit
  // so we save the changes into a temporary state, then save the temp state
  // to the actual state when the user clicks save
  const [tempTitle, setTempTitle] = useState('')
  const [tempBody, setTempBody] = useState('')
  const [editing, setEditing] = useState(false)

  useEffect(()=>{
    setTitle(props.title)
    setBody(props.body)
  },[])

  const deletePost =()=>{
    axios.delete(`/api/posts/${props.id}`)
  }

  
  const handleSubmit=(e)=>{
    debugger
    e.preventDefault()
    setTitle(tempTitle)
    setBody(tempBody)
    setEditing(false)
    let params = {title:tempTitle,body:tempBody}
    axios.put(`/api/posts/${props.id}`,params)
  }

  const editForm=()=>{
    if (editing){
      return(
        <Table.Cell>
          <Form onSubmit={handleSubmit}>
            <Form.Input label='title' placeholder='title' name='title' onChange={(e)=>setTempTitle(e.target.value)} required/>
            <Form.Input label='body' placeholder='body' name='body' onChange={(e) => setTempBody(e.target.value)} required/>
          </Form>
        </Table.Cell>
      )
    } else {
      return(
        <Table.Cell>
          <Header as="h3">{title}</Header>
          <p>{body}</p>
        </Table.Cell>
      )
    }
  }

  return(
    <Table.Row>
      <Table.Cell collapsing>
        {
          editing ?
          <Button icon color='grey' onClick={()=>setEditing(false)}><Icon name='cancel'/></Button>
          :
          <Button icon color='blue' onClick={()=>setEditing(true)}><Icon name="pencil" /></Button>
        }
      </Table.Cell>
      <Table.Cell collapsing>
        {
          editing ?
          <Button icon color='green' onClick={handleSubmit}><Icon name='save' /></Button>
          :
          <Button icon color='red' onClick={deletePost}><Icon name="trash"/></Button>
        }
      </Table.Cell>
      {editForm()}
    </Table.Row>
  )
};

export default Post;