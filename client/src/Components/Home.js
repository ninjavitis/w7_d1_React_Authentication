import React from 'react';
import {Header, Card, Image, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Login from './Login'

class Home extends React.Component {
  state = { profiles: [], };
  
  componentDidMount() {
    axios.get('/api/profiles')
      .then(res => this.setState({ profiles: res.data, }))
  }
  
  sample = () => {
    const { profiles, } = this.state;

    if (profiles.length) {
      const index = Math.floor(Math.random() * profiles.length);
      return profiles[index];
    } else {
      return null;
    }
  }

  downVote =(id)=>{
    const {profiles} = this.state
    this.setState({profiles: profiles.filter(c=> c.id !== id)})
  }

  upVote =(id)=>{
    const {profiles} =this.state
    axios.put(`/api/profiles/${id}`)
    .then(()=> this.setState({profiles:profiles.filter(c=>c.id !== id)}))
  }

  star=(id)=>{
    
  }

  render() {
    const profile = this.sample()
    if (profile){
      return(
        <div>
          <br />
          <Header as="h1">Failbook</Header>
          <br />
          <Card key={profile.id}>
          <Link to={`/profile/${profile.id}`}>
            <Image src={profile.image} />
            <Card.Content>
              <Card.Header>{profile.name}</Card.Header>
            </Card.Content>
          </Link>
            <Card.Content extra>
              <Button color ="red" icon basic onClick={()=> this.downVote(profile.id)}>
                <Icon name="thumbs down"/>
              </Button>
              <Button color ="green" icon basic onClick={()=> this.upVote(profile.id)}>
                <Icon name="thumbs up"/>
              </Button>
              <Button color ="yellow" icon basic onClick={()=> this.star(profile.id)}>
                <Icon name="star"/>
              </Button>
            </Card.Content>
          </Card>
          <Link to="/MyFriends">
            <Button color="blue">
            My Friends
            </ Button>
          </Link>
        </div>
      )
    } else {
      return(
        // <Login/>
        <Header as="h1" textalign="center">Log in to start rating your friends!</Header>
      )
      
    }
  }
}

export default Home;
