import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import {AuthConsumer, } from '../Providers/AuthProvider'

class Navbar extends React.Component {
  leftNavItems=()=>{
    const {auth:{user}} = this.props

    if(user){
      return(
        <>
          <Link to="/">
            <Menu.Item
              name="FAILBOOK"
              active={this.props.location.pathname === "/"}
              />
          </Link>
          <Link to="/MyFriends">
            <Menu.Item
              name="My Friends"
              active={this.props.location.pathname === "/MyFriends"}
              />
          </Link>
          <Link to="/posts">
            <Menu.Item
              name="Posts"
              active={this.props.location.pathname === "/posts"}
              />
          </Link>
        </>
      )
    } else {
      return(
        <Link to="/">
          <Menu.Item
            name="FAILBOOK"
            active={this.props.location.pathname === "/"}
          />
        </Link>
      )
    }
  }



  rightNavItems=()=>{
    const {auth:{user, handleLogout},location} = this.props

    if(user){
      return(
        <Menu.Menu position="right">
          <Menu.Item>
            <span>{user.name}</span>
            <Image src={user.image} avatar/>
          </Menu.Item>
          <Menu.Item 
            name="Logout"
            onClick={()=>handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item name="Login" active={location.pathname==='/login'}/>
          </Link>
          <Link to="/register">
            <Menu.Item name="Register" active={location.pathname==='/register'}/>
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <Menu pointing secondary>
        {this.leftNavItems()}
      
      {this.rightNavItems()}
    </Menu>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { authObject=>
        <Navbar {...this.props} auth={authObject}/>
        }
      </AuthConsumer>
    );
  }
}


export default withRouter(ConnectedNavbar);