import React, {Component} from 'react'
import {BrowserRouter, Redirect} from 'react-router-dom'

import {UserConsumer}  from '../contexts/UserContext'

export default class LogoutButtonContainer extends Component {
  state = {
    success: false
  }

  render() {
    if (this.state.success) {
      return (
        <Redirect to='login' />
      )
    } else {
      return(
        <UserConsumer>
          {({logout}) => (
            <button onClick={e => {
              logout();
              this.setState({success: true})
            }}>Log out</button>
          )}
        </UserConsumer>
      )
    }
  }
}