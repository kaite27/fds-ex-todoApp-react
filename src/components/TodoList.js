import React, {Component} from 'react'
import TodoItem from './TodoItem.js'

export default class TodoList extends Component {
  render() {
    const { todos, handleTodoItemComplete, handleTodoItemDelete } = this.props
    return (
      <ul>
        {/* map() 에서 반환하는 DOM 요소 가장 바깥 요소에 key 를 넣어준다 */}
        {
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              id={todo.id} 
              body={todo.body} 
              complete={todo.complete} 
              onComplete={handleTodoItemComplete} 
              onDelete={handleTodoItemDelete}
            /> 
          ))
        }
      </ul>
    )
  }
}