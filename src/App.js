import React, {Component} from 'react'

import TodoPage from './pages/TodoPage.js'
import LoginPage from './pages/LoginPage.js'

export const PageContext = React.createContext()

export default class App extends Component {
  state = {
    page: 'login'
  }

  handleGoToTodoPage = (e) => {
    this.setState({
      page: 'todo'
    })
  }

  render() {
    const { page } = this.state
    const value = { goToTodoPage: this.handleGoToTodoPage }

    return (
      <PageContext.Provider value={value}>
      <div>
        {page === 'login' ? (
          <LoginPage />
          ) : (
          <TodoPage />
          )
        }
      </div>
      </PageContext.Provider>
    )
  }
}
