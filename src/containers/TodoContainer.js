import React, { Component } from 'react';

import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'
import {TodoConsumer, TodoProvider} from '../contexts/TodoContext.js'

export default class TodoContainer extends Component {
  render() {
    return (      
      <TodoProvider>
        <TodoConsumer>
          {({todos, loading, createTodo, updateTodoItemBody, completeTodo, deleteTodo, fetchTodos}) => (
          <div className="row">  
            <h1 className="todoTitle">TODO LIST</h1>
            <TodoForm onCreate={createTodo}/>
            {loading ? (
              <div>loading...</div>
            ) : (
              <TodoList 
              todos={todos} 
              onTodoComplete={completeTodo} 
              onTodoDelete={deleteTodo} 
              onTodoBodyUpdate={updateTodoItemBody}
              />
            )}
          </div>
          )}
        </TodoConsumer>                    
      </TodoProvider>
    );
  }
}
