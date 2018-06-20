import React, { Component } from 'react';

import TodoContainer from '../containers/TodoContainer.js'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'

import withAuth from '../hoc/withAuth.js'

class TodoPage extends Component {
  render() {
    return (      
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <TodoContainer />
        <LogoutButtonContainer />
      </React.Fragment>
    )
  }
}

export default withAuth(TodoPage)