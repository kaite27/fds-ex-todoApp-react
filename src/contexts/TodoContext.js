import React, {Component} from 'react'

import todoAPI from '../todoAPI.js'

const { Provider, Consumer } = React.createContext()

class TodoProvider extends Component {
  state = {
    loading: false,
    todos: [],
    todoCount: 0
  }

  componentDidMount() {
    this.fetchTodos();
  }
  
  // (component lifecycle hook) component 가 처음 마운트되면..
  fetchTodos = async () => {
    this.setState({ loading: true })
    const res = await todoAPI.get('/todos?_sort=id&_order=desc')
    const resTodo = await todoAPI.get('/todos?complete=false')
    let todoCnt = 0;
    resTodo.data.map(i => {
      todoCnt ++;
    })
    this.setState({
      todos: res.data,
      loading: false,
      todoCount: todoCnt
    })
  }

  // Add 버튼이 눌렸을 때, 새로 리스트를 추가할 수 있도록
  createTodo = async newTodoBody => {
    // input value !== null, 빈 문자열은 falthy
    if(newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      }
      
      this.setState({ loading: true })
      await todoAPI.post('/todos', newTodo)
      await this.fetchTodos()
    }
  }

  // body 가 눌리면 prompt 로 수정창 띄우기
  updateTodoItemBody = async (id, body) => {
    if(body) {
      this.setState({ loading: true })
      await todoAPI.patch(`/todos/${id}`, {
        body
      })
      await this.fetchTodos()
    }
  }

  // newTodo 는 t 기존의 배열 그대로 가지고오고 ...t, 그 중 특정 t.id 만 업데이트 해라
  completeTodo = async id => {
    this.setState({ loading: true })
    await todoAPI.patch(`/todos/${id}`, {
      complete: true,
      loading: false
    })
    await this.fetchTodos()
  }

  // 지우기를 원하는 열을 t.id 제외한 나머지 리스트들 !t.id 을 불러와라 filter( !== )
  deleteTodo = async id => {
    this.setState({ 
      loading: true,
      todos: this.state.todos.filter(t => t.id !== id)
    })
    await todoAPI.delete(`/todos/${id}`, {
      loading: false
    })
    await this.fetchTodos()
  }

  render() {
    const value = {
      fetchTodos: this.fetchTodos,
      createTodo: this.createTodo,
      updateTodoItemBody: this.updateTodoItemBody,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo,
      loading: this.state.loading,
      todos: this.state.todos,
      todoCount: this.state.todoCount
    }
    return(
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {TodoProvider, Consumer as TodoConsumer}