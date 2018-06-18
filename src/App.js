import React, {Component} from 'react'

import TodoPage from './pages/TodoPage.js'
import LoginPage from './pages/LoginPage.js'
import {PageProvider, PageConsumer} from './contexts/PageContext.js'
import {UserProvider} from './contexts/UserContext.js'

export default class App extends Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => localStorage.getItem('token') ? (
                <TodoPage />
              ) : value.page === 'login' ? (
                <LoginPage />
              ) : (
                <TodoPage />
              )
            }           
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    )
  }
}
