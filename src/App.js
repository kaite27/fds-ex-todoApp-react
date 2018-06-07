import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        body: 'Study React',
        complete: true
      },
      {
        id: 2,
        body: 'Study Redux',
        complete: false
      },
    ]    
  }

  render() {
    const {todos} = this.state // 분해대입!
    return (
      <div>
        <h1>TODO LIST</h1>
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
