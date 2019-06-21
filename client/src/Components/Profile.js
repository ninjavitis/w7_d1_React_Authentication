import React, {useState, useEffect} from 'react';
// import AuthConsumer from '../Providers/AuthProvider'
import axios from 'axios';
import Posts from './Posts'
import {Image, Card, Button, Icon, } from 'semantic-ui-react'
import ProfileCard from './ProfileCard'

const Profile = (props) => {
  const [name, setName] = useState(props.location.state.name)
  const [image, setImage] = useState(props.location.state.image)

  // const {name} = props.location.state.name
  // const {image} = props.location.state.image

  // useEffect(()=>{
  //   axios.get(`/api/users/${props.match.params.id}`)
  //   .then( res => {
  //     setName(res.data.name); 
  //     setImage(res.data.image);
  //     }
  //   )
  // },[props])

return(
  <div>
    <ProfileCard name={name} image={image}/>
    <Posts id={props.match.params.id} />
  </div>

)
};

export default Profile;