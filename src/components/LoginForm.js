import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChangeID = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleInputChangePW = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin = async e => {
    const {onLogin} = this.props
    onLogin(this.state.username, this.state.password)
  }

  render() {
    const { username, password } = this.state
    return (
      <React.Fragment>
        <h1>LOGIN PAGE</h1>        
        <input type="text" value={username} onChange={this.handleInputChangeID} placeholder="Your ID"/>
        <input type="password" value={password} onChange={this.handleInputChangePW} placeholder="Your Password"/>
        <button onClick={this.handleLogin}>Login</button>
      </React.Fragment>
    )
  }
}