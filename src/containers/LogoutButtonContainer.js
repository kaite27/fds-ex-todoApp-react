import React, {Component} from 'react'

import {UserConsumer}  from '../contexts/UserContext'
import {PageConsumer} from '../contexts/PageContext'

export default class LogoutButtonContainer extends Component {
  render() {
    return(
      <UserConsumer>
        {({logout}) => (
          <PageConsumer>
            {({handleGoToLoginPage}) => (
              <button onClick={e => {
                logout();
                handleGoToLoginPage()
              }}>Log out</button>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    )
  }
}