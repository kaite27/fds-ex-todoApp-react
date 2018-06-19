import React, {Component} from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import TodoPage from './pages/TodoPage.js'
import LoginPage from './pages/LoginPage.js'
import {UserProvider} from './contexts/UserContext.js'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path='/login' component={LoginPage} />
          <Route path='/todo' component={TodoPage} />

          {localStorage.getItem('token') ? 
          <Redirect to='/todo' /> 
          : <Redirect to='/login' /> }
        </UserProvider>
      </BrowserRouter>
    )
  }
}
