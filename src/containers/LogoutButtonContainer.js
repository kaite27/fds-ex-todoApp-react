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
        <div className="logout-box">
          <UserConsumer>
            {({logout}) => (
            <button className="logout" onClick={e => {
              logout();
              this.setState({success: true})
              }}>Change accout? Log out</button>
            )}
          </UserConsumer>
        </div>
      )
    }
  }
}