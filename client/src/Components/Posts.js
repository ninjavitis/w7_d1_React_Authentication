import React, {useState, useEffect} from 'react';
import { Form, Table, Header,  } from 'semantic-ui-react';
import AuthConsumer from '../Providers/AuthProvider'
import axios from 'axios';
import Post from './Post'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [deleted, setDeleted] = useState(false)

  useEffect(()=>{
    axios.get(`/api/user/${props.id}/posts`)
    .then(res=>{setPosts(res.data)})
  },[body, title, deleted])

  const handleSubmit=(e)=>{
    axios.post(`/api/posts`, {title,body})
    .catch(err=>console.log(err))
  }

  const deletePost =(id)=>{
    axios.delete(`/api/posts/${id}`)
    .then(setDeleted(true), setDeleted(false))
  }

  const renderPosts=()=>{
    return (
      posts.map(post =>
      <Post key={post.id} title={post.title} body={post.body} id={post.id} deletePost={deletePost}/>
    ))
  }

  return (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Input label="title" placeholder="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required autoFocus />
            <Form.TextArea label="body" placeholder="body" name="body" value={body} onChange={(e)=>setBody(e.target.value)} required  />
            <Form.Button color="blue">Submit</Form.Button> 
          </Form>
          <br/>
          <Header as="h3" textAlign="center">Must be manually reloaded after a new or deleted post.  The only way I could find to reload resulted in an infinite loop.</Header>
          <br/>
          <Table>
            <Table.Body>
              {renderPosts()}
            </Table.Body>
          </Table> 
        </>
  );
}

// export default class ConnectedPosts extends React.Component{
//   render(){
//     return(
//       <AuthConsumer>
//         {auth => <Posts {...this.props} auth={auth}></Posts>}
//       </AuthConsumer>
//     )
//   }
// }

export default Posts;