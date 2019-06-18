import React from 'react';
import {AuthConsumer} from '../Providers/AuthProvider'
import axios from 'axios';

class FetchUser extends React.Component {
  state = { loaded:false }


  // If the user is authenticated set the status to loaded.
  // If not check to see if there is a local token
  // If there is ensure it is valid
  componentDidMount() {
    const {auth:{authenticated, setUser}} = this.props
    if (authenticated){
      this.loaded()
    } else {
      if (this.checkLocalToken()){
        axios.get('/api/auth/validate_token')
        .then(res=>{setUser(res.data.data)
        this.loaded()
      })
      .catch(res => {this.loaded()})
      } else {
        this.loaded()
      }
    }
  }

  loaded=()=> this.setState({loaded:true})

  checkLocalToken=()=>{
    const token = localStorage.getItem('access-token')
    return token
  }

  render() {
    return this.state.loaded ? this.props.children : null
  } 
}

const ConnectedFetchUser=(props)=>(
  <AuthConsumer>
    {auth => <FetchUser {...props} auth={auth}/>}
  </AuthConsumer>
)



export default ConnectedFetchUser;