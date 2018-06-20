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
          {/* props 을 내려주기 위해서는 element 이어야 하는데, render() 함수로 해결할 수 있음 */}
          <Route path='/todo' render={() => <TodoPage title="IDK"/> } />
          <Route path='/' compoennt={Home} />
          {/* {localStorage.getItem('token') ? 
          <Redirect to='/todo' /> 
          : <Redirect to='/login' /> } */}
        </UserProvider>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  localStorage.getItem('token') ? 
  <Redirect to='/todo' /> 
  : <Redirect to='/login' /> 
)