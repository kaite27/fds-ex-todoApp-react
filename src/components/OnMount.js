import React, { Component } from 'react'

export default class OnMount extends Component {
  componentDidMount() {
    const {onMount} = this.props
    onMount()
  }
  
  render() {
    return null
  }
}