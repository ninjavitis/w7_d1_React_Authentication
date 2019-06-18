import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import {AuthConsumer, } from '../Providers/AuthProvider'

const Navbar = (props) => {

  // If the User is logged in the menu shows the logout button
  // otherwise it shows the login/register buttons
  const rightNavItems=(user, handleLogout)=>{
    if(user){
      return(
        <Menu.Menu position="right">
          <Menu.Item 
            name="Logout"
            onClick={()=>handleLogout(props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item name="Login" active={props.location.pathname==='/login'}/>
          </Link>
          <Link to="/register">
            <Menu.Item name="Register" active={props.location.pathname==='/register'}/>
          </Link>
        </Menu.Menu>
      )
    }
  }

  return(
    <AuthConsumer>
      {auth =>
        <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
            name="FAILBOOK"
            // active={props.location.pathname === "/"}
          />
        </Link>
        {rightNavItems(auth)}
      </Menu>
      }
    </AuthConsumer>
    
  )
}

export default withRouter(Navbar);