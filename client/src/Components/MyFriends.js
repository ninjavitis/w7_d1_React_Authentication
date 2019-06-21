import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, Divider, Image, Button, Icon} from 'semantic-ui-react'


const MyFriends = (props) => {
  const [friends, setFriends] = useState([])

  useEffect(()=>{
    axios.get('/api/my_friends')
    .then(res=>setFriends(res.data))
  },[])

  return(
    <Card.Group itemsPerRow={4}>
        {friends.map( friend=>
          <Card key={friend.id}>
            <Link to={`/profile/${friend.id}`}>
            <Image src={friend.image}/>
            <Card.Content>
              <Divider />
              <Card.Header>{friend.name}</Card.Header>
            </Card.Content>
            </Link>
            <Button color ="yellow" icon basic onClick={()=> props.star(friend.id)}>
              <Icon name="star"/>
            </Button>
            <Button color ="red" icon basic onClick={()=> props.location.downVote(friend.id)}>
              <Icon name="thumbs down"/>
            </Button>
          </Card>
        )}
      </Card.Group>
  )
};

export default MyFriends;