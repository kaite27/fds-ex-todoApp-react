import React, { Component } from 'react';

import {TodoConsumer, TodoProvider} from '../contexts/TodoContext.js'
import Todo from '../components/Todo.js'

export default class TodoContainer extends Component {
  render() {
    return (      
      <TodoProvider>
        <TodoConsumer>
          {({todos, loading, createTodo, updateTodoItemBody, completeTodo, deleteTodo, todoCount}) => (
            <Todo onCreate={createTodo} todoCount={todoCount} todos={todos} onTodoComplete={completeTodo} onTodoDelete={deleteTodo}
            onTodoBodyUpdate={updateTodoItemBody}/>
          )}
        </TodoConsumer>                    
      </TodoProvider>
    );
  }
}

