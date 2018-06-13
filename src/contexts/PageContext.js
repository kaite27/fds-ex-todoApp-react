import React, {Component} from 'react'

const { Provider, Consumer } = React.createContext()

class PageProvider extends Component {
  state = {
    page: 'login'
  }

  handleGoToTodoPage = (e) => {
    this.setState({
      page: 'todo'
    })
  }

  render() {
    const value = { 
      handleGoToTodoPage: this.handleGoToTodoPage,
      page: this.state.page 
    }
    
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {PageProvider, Consumer as PageConsumer}