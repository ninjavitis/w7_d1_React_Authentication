import React from 'react';
import {Header, Card, Image, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import Login from './Login'

class Home extends React.Component {
  state = { users: [], };
  
  componentDidMount() {
    axios.get('/api/users')
    .then(res => {
      this.setState({ users: res.data, })
    }
    )
  }


  sample = () => {
    const { users, } = this.state;

    if (users.length) {
      const index = Math.floor(Math.random() * users.length);
      return users[index];
    } else {
      return null;
    }
  }

  downVote =(id)=>{
    const {users} = this.state
    this.setState({users: users.filter(c=> c.id !== id)})
  }

  upVote =(id)=>{
    const {users} =this.state
    axios.put(`/api/users/${id}`)
    .then(()=> this.setState({users:users.filter(c=>c.id !== id)}))
  }

  star=(id)=>{
    
  }

  render() {
    const user = this.sample()
    if (user){
      return(
        <div>
          <br />
          <Card key={user.id}>
          <Link to={`/user/${user.id}`}>
            <Image src={user.image} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
            </Card.Content>
          </Link>
            <Card.Content extra>
              <Button color ="red" icon basic onClick={()=> this.downVote(user.id)}>
                <Icon name="thumbs down"/>
              </Button>
              <Button color ="green" icon basic onClick={()=> this.upVote(user.id)}>
                <Icon name="thumbs up"/>
              </Button>
              <Button color ="yellow" icon basic onClick={()=> this.star(user.id)}>
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
