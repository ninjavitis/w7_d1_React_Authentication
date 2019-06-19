import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import {AuthConsumer, } from '../Providers/AuthProvider'

class Navbar extends React.Component {
  rightNavItems=()=>{
    const {auth:{user, handleLogout}, location} = this.props

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
            <Menu.Item name="Login" active={this.props.location.pathname==='/login'}/>
          </Link>
          <Link to="/register">
            <Menu.Item name="Register" active={this.props.location.pathname==='/register'}/>
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <Menu pointing secondary>
      <Link to="/">
        <Menu.Item
          name="FAILBOOK"
          active={this.props.location.pathname === "/"}
        />
      </Link>
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