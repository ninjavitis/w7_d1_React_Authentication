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
  },[posts])

 const deletePost = (id) => {
  axios.delete(`/api/posts/${id}`)
  props.history.push('/posts')
}

  const renderPosts=()=>{
    return posts.map(post =>
      <Post key={post.id} title={post.title} body={post.body} id={post.id}/>
    )
  }


  return (
    <>
      <PostForm/>
      <br/>
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