import React, { Component } from 'react';
import TodoList from './components/TodoList.js'
import axios from 'axios'

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class App extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   body: 'Study React',
      //   complete: true
      // },
      // {
      //   body: 'Study Redux',
      //   complete: false
      // },
    ],
    newTodoBody: ''    
  }

  // 처음 DB 에서 정보를 불러와 화면에 뿌려라
  async componentDidMount() {
    await this.fetchTodos()
  }

  // (component lifecycle hook) component 가 처음 마운트되면..
  fetchTodos = async () => {
    this.setState({ loading: true })
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    })
  }


  // 이벤트 조작을 위한 핸들러 함수는 `handle`을 시작으로 하는 관례, 그리고 항상 화살표 함수
  handleInputChange = event => {
    this.setState({
      newTodoBody: event.target.value
    })
  }

  // Add 버튼이 눌렸을 때, 새로 리스트를 추가할 수 있도록
  handleAddNewTodoButton = async event => {
    // input value !== null, 빈 문자열은 falthy
    if(this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false
      }
      // 배열 안 ... 은 기존에 배열에 들어있던 값 호출 
      this.setState({
        // input 에 있는 값을 새 할 일로 추가하고나서 input 빈 문자열로 비워주기
        newTodoBody: ''
      })

      this.setState({ loading: true })
      await todoAPI.post('/todos', newTodo)
      await this.fetchTodos()
    }
  }

  // newTodo 는 t 기존의 배열 그대로 가지고오고 ...t, 그 중 특정 t.id 만 업데이트 해라
  handleTodoItemComplete = async id => {
    this.setState({ loading: true })
    await todoAPI.patch(`/todos/${id}`, {
      complete: true,
      loading: false
    })
    await this.fetchTodos()
  }

  // 지우기를 원하는 열을 t.id 제외한 나머지 리스트들 !t.id 을 불러와라 filter( !== )
  handleTodoItemDelete = async id => {
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
    /* 분해대입! */
    const {todos, newTodoBody, loading} = this.state 
    return (
      <div>
        <h1>TODO LIST</h1>
        <label>
          <input type="text" value={newTodoBody} onChange={this.handleInputChange}/>
          <button onClick={this.handleAddNewTodoButton}>Add</button>
        </label>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList todos={todos} handleTodoItemComplete={this.handleTodoItemComplete} handleTodoItemDelete={this.handleTodoItemDelete}/>
        )}
      </div>
    );
  }
}



export default App;
