import React, { Component } from 'react';

import TodoContainer from '../containers/TodoContainer.js'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'

import withAuth from '../hoc/withAuth.js'

class TodoPage extends Component {
  render() {
    return (      
      <React.Fragment>
        <TodoContainer />
        <LogoutButtonContainer />
      </React.Fragment>
    )
  }
}

// static prop 과 동일하게 작동
// TodoPage.defaultProps = {
//   title: 'DEFAULT'
// }

// HOC 를 반환하는 withAuth()
// 에 인자를 부여하기 위한 (TodoPage)
export default withAuth('/login')(TodoPage)