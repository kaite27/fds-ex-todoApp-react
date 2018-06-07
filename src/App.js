import React, { Component } from 'react';

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
  handleButtonClick = event => {
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
        newTodoBody: ''
      })
    }
  }

  render() {
    {/* 분해대입! */}
    const {todos, newTodoBody} = this.state 
    return (
      <div>
        <h1>TODO LIST</h1>
        <label>
          <input type="text" value={newTodoBody} onChange={this.handleInputChange}/>
          <button onClick={this.handleButtonClick}>Add</button>
        </label>
        <ul>
          {
            todos.map(todo => (
              <li className={todo.complete ? 'complete' : ''} key={todo.id}>{todo.body}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
