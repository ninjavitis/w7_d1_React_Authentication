import React from 'react';
import {Card, Divider, Image, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const ProfileCard = (props) => {
  return(
    <Card key={props.id}>
      <Link to={{
        pathname:`/users/${props.id}`,
        state:{name:props.name, 
        image:props.image, 
        profile_id:props.id}
        }}>
      <Image src={props.image}/>
      <Card.Content>
        <Divider />
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
      </Link>
      <Button color ="yellow" icon basic onClick={()=> props.star(props.id)}>
        <Icon name="star"/>
      </Button>
      <Button color ="red" icon basic onClick={()=> props.location.downVote(props.id)}>
        <Icon name="thumbs down"/>
      </Button>
    </Card>
  )
}

export default ProfileCard;