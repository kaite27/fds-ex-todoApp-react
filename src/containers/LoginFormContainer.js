import React, { Component } from 'react';

import LoginForm from '../components/LoginForm.js'
import {UserConsumer} from '../contexts/UserContext.js'
import {PageConsumer} from '../contexts/PageContext.js'
import OnMount from '../components/OnMount.js'

export default class LoginFormContainer extends Component {
  render() {
    return (
      <UserConsumer>
        {({login}) => (
          <PageConsumer>
            {({handleGoToTodoPage}) => (
              <React.Fragment>
                <LoginForm onLogin={async (usernamer, password) => {
                  await login(usernamer, password)
                  handleGoToTodoPage()
                }} />
                {localStorage.getItem('token') && <OnMount onMount={handleGoToTodoPage} /> }                
              </React.Fragment>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    )
  }
}