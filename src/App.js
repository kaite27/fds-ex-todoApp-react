import React, { Component } from 'react';
import TodoList from './components/TodoList.js'

let count = 0  // count++ 을 통해 임의로 순차적 id 값 부여

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: 'Study React',
        complete: true
      },
      {
        id: count++,
        body: 'Study Redux',
        complete: false
      },
    ],
    newTodoBody: ''    
  }
  // 이벤트 조작을 위한 핸들러 함수는 `handle`을 시작으로 하는 관례, 그리고 항상 화살표 함수
  handleInputChange = event => {
    this.setState({
      newTodoBody: event.target.value
    })
  }

  // Add 버튼이 눌렸을 때, 새로 리스트를 추가할 수 있도록
  handleAddNewTodoButton = event => {
    // input value !== null, 빈 문자열은 falthy
    if(this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      }
      // 배열 안 ... 은 기존에 배열에 들어있던 값 호출 
      this.setState({
        todos: [
          ...this.state.todos,
          newTodo
        ],
        // input 에 있는 값을 새 할 일로 추가하고나서 input 빈 문자열로 비워주기
        newTodoBody: ''
      })
    }
  }

  // newTodo 는 t 기존의 배열 그대로 가지고오고 ...t, 그 중 특정 t.id 만 업데이트 해라
  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        }
        if(t.id === id){
          newTodo.complete 
          ? (newTodo.complete = false) 
          : (newTodo.complete = true)
        }
        return newTodo
      })
    })
  }

  // 지우기를 원하는 열을 t.id 제외한 나머지 리스트들 !t.id 을 불러와라 filter( !== )
  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }

  render() {
    /* 분해대입! */
    const {todos, newTodoBody} = this.state 
    return (
      <div>
        <h1>TODO LIST</h1>
        <label>
          <input type="text" value={newTodoBody} onChange={this.handleInputChange}/>
          <button onClick={this.handleAddNewTodoButton}>Add</button>
        </label>
        <TodoList todos={todos} handleTodoItemComplete={this.handleTodoItemComplete} handleTodoItemDelete={this.handleTodoItemDelete}/>
      </div>
    );
  }
}



export default App;
