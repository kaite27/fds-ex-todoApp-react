import React, {Component} from 'react'
import todoAPI from '../todoAPI.js'

const {Provider , Consumer} = React.createContext()

class UserProvider extends Component {
  login = async (username, password) => {
    try {
    // post payload to todoAPI
      const payload = {
        username: username,
        password: password
      }
      const res = await todoAPI.post('/users/login', payload) 
      // Store token to localStorage 
      localStorage.setItem('token', res.data.token)

      // Make state empty
      this.setState({
        username: '',
        password: ''
      })
    
      // Move to TODO App page
      this.props.onLogin()
    } catch (e) {
      if(e.response) {
        if(e.response.status === 400)
        alert('Wrong ID or Password!')
      }
    }
  }

  render() {
    const value = {
      login: this.login
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {UserProvider, Consumer as UserConsumer}