import React, {useState, useEffect} from 'react';
import { Form, Table, Header,  } from 'semantic-ui-react';
import axios from 'axios';
import Post from './Post'


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  useEffect(()=>{
    axios.get('/api/posts')
    .then(res=>{setPosts(res.data)})
  },[body, title])

  const handleSubmit=(e)=>{
    axios.post(`/api/posts`, {title,body})
      .then(()=>{this.setState(this.DefaultValues)
    })
    .catch(err=>console.log(err))
  }

  const renderPosts=()=>{
    return posts.map(post =>
      <Post key={post.id} title={post.title} body={post.body} id={post.id}/>
    )
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input label="title" placeholder="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required autoFocus />
        <Form.Input label="body" placeholder="body" name="body" value={body} onChange={(e)=>setBody(e.target.value)} required  />
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

// export default class ConnectedPostForm extends React.Component{
//   render(){
//     return(
//       <AuthConsumer>
//         {auth => <PostForm {...this.props} auth={auth}></PostForm>}
//       </AuthConsumer>
//     )
//   }
// }

export default Posts;