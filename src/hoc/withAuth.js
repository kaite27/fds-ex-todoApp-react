import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

// hoc 를 반환하는 함수 
export default function(redirectPath) {
  // component 를 인자로 받는 함수의 경우, 인자는 has to be capital letter
  return function(WrappedComponent) {
    return class extends React.Component {
      render() {
        if(localStorage.getItem('token')) {
          return <WrappedComponent {...this.props}/>
        } else {
          return <Redirect to={redirectPath} />
        }
      }
    }
  }
}

// 위 코드를 다른 방식으로 고차함수 적용하면.. 