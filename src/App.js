import React, {Component} from 'react'

import TodoPage from './pages/TodoPage.js'
import LoginPage from './pages/LoginPage.js'
import {PageProvider, PageConsumer} from './contexts/PageContext.js'
import {UserProvider} from './contexts/UserContext.js'

export default class App extends Component {
  render() {
    return (
      <PageProvider>
          <PageConsumer>
            {value => (
              <UserProvider onLogin={value.handleGoToTodoPage}>
              {
                value.page === 'login' ? (
                  <LoginPage />
                ) : (
                  <TodoPage />
                )  
              }
              </UserProvider>
            )}
          </PageConsumer>
      </PageProvider>
    )
  }
}
