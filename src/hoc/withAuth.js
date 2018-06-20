import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

// component 를 인자로 받는 함수의 경우, 인자는 has to be capital letter
export default function(WrappedComponent) {
  return class extends React.Component {
    render() {
      if(localStorage.getItem('token')) {
        return <WrappedComponent {...this.props}/>
      } else {
        return <Redirect to="/login" />
      }
    }
  }
}