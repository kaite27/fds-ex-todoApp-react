import React, { Component } from 'react';

const todos = [
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

class App extends Component {
  render() {
    return (
      <div>
        <h1>TODO LISt</h1>
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>{todo.body}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
