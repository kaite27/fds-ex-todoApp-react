import React, { Component } from 'react';
import {BrowserRouter, Redirect} from 'react-router-dom'

import LoginForm from '../components/LoginForm.js'
import {UserConsumer} from '../contexts/UserContext.js'

export default class LoginFormContainer extends Component {
  state = {
    success: false
  }

  render() {
    if (this.state.success) {
      return (
        <Redirect to='todo' />
      )
    } else {
      return (
        <UserConsumer>
          {({login}) => (
            <LoginForm onLogin={async (usernamer, password) => {
              await login(usernamer, password)
              this.setState({success: true}) 
            }} />
          )}
        </UserConsumer>
      )
    }
  }
}