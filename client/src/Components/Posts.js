import React, {useState, useEffect} from 'react';
import PostForm from './PostForm'
import { Table, Header,  } from 'semantic-ui-react';
import axios from 'axios';
import Post from './Post'


const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [editPost, setEditPost] = useState(false)

  useEffect(()=>{
    axios.get('/api/posts')
    .then(res=>{setPosts(res.data)})
  },[])


  const renderPosts=()=>{
    return posts.map(post =>
      <Post key={post.id} title={post.title} body={post.body} id={post.id}/>
    )
  }


  return (
    <>
      <PostForm/>
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

export default Posts;