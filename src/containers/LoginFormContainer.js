import React, { Component } from 'react';

import LoginForm from '../components/LoginForm.js'
import {UserConsumer} from '../contexts/UserContext.js'
import {PageConsumer} from '../contexts/PageContext.js'

export default class LoginFormContainer extends Component {
  render() {
    return (
      <UserConsumer>
        {({login}) => (
          <PageConsumer>
            {({handleGoToTodoPage}) => (
              <LoginForm onLogin={async (usernamer, password) => {
                await login(usernamer, password)
                handleGoToTodoPage()
              }} />
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    )
  }
}