import React, { Component } from 'react';

export default class LoginForm extends Component {
  // state = {
  //   username: '',
  //   password: ''
  // }

  // handleInputChangeID = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // handleInputChangePW = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  // ref 사용해서 input 제어하기
  usernameRef = React.createRef()
  passwordRef = React.createRef()
  
  handleSubmit = e => {
    e.preventDefault()
    // 중간 평가때랑 똑같이 하기 위해서는 아래 input name="" 추가
    // Change into onlogin(username, password) 
    // const username = e.target.elements.username.value
    // const password = e.target.elements.password.value
    
    const {onLogin} = this.props
    onLogin(this.usernameRef.current.value, this.passwordRef.current.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOGIN PAGE</h1>        
        <input ref={this.usernameRef} type="text" placeholder="Your ID"/>
        <input type="password" ref={this.passwordRef} placeholder="Your Password"/>
        <button>Login</button>
      </form>
    )
  }
}