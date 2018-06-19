import React, { Component } from 'react';

import TodoContainer from '../containers/TodoContainer.js'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'

export default class TodoPage extends Component {
  render() {
    return (      
      <React.Fragment>
        <TodoContainer />
        <LogoutButtonContainer />
      </React.Fragment>
    )
  }
}
