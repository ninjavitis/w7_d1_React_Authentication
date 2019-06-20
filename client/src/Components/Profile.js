import React, {useState, useEffect} from 'react';
import AuthConsumer from '../Providers/AuthProvider'
import axios from 'axios';
import {Image} from 'semantic-ui-react'

const Profile = (props) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  useEffect(()=>{
    axios.get(`/api/profiles/${props.match.params.id}`)
    .then( res => {
      setName(res.data.name); 
      setImage(res.data.image);
      }
    )
  },[props])

return(
  <div>
    <Image src={image}/>
    {name}
  </div>

)
};

export default Profile;