import React, { Component } from 'react';
import { directive } from '@babel/types';

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

  // ref 사용해서 input 제어하기
  // usernameRef = React.createRef()
  // passwordRef = React.createRef()
  
  handleSubmit = e => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    
    const {onLogin} = this.props
    // onLogin(this.usernameRef.current.value, this.passwordRef.current.value)
    onLogin(username, password)
  }

  render() {
    return (
      <section className="LoginForm">
        <div className="design-box">
          <h2>LOGIN</h2>
          <p>ID: admin PW: 0 - test purpose only</p>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBox">
              {/* <input ref={this.usernameRef} type="text" /> */}
              <input onChange={this.handleInputChangeID} value={this.state.username} type="text" />
              <label className={this.state.username?'valid':''}>Username</label>
            </div>
            <div className="inputBox">
              <input type="password" onChange={this.handleInputChangePW} value={this.state.password} />
              <label className={this.state.password?'valid':''}>Password</label>
            </div>
            <div className="buttonBox">
              <button>Login</button>
              <button type="button" disabled>Sign in</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}