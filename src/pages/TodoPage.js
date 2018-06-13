import React, { Component } from 'react';

import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'
import todoAPI from '../todoAPI.js'

export default class TodoPage extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   body: 'Study React',
      //   complete: true
      // }
    ]  
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
    /* 분해대입! */
    const {todos, loading} = this.state 
    return (      
      <div>
        <React.Fragment>
          <div className="row">  
            <h1 className="todoTitle">TODO LIST</h1>
            <TodoForm onCreate={this.createTodo}/>
            {loading ? (
              <div>loading...</div>
            ) : (
              <TodoList 
              todos={todos} 
              onTodoComplete={this.completeTodo} 
              onTodoDelete={this.deleteTodo} 
              onTodoBodyUpdate={this.updateTodoItemBody}
              />
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}
