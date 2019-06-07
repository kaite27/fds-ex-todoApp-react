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
            <div className="todo-box">
              <div className="todo-aside">
                <div className="user-box">
                  <div className="user-pic">
                    <img src="https://image.freepik.com/free-photo/beautiful-woman-with-healthy-body-white-background_1150-8467.jpg" alt="user"/>
                  </div>
                  <span>Admin</span>
                </div>
                <div className="todo-category">
                  <ul>
                    <li className="active">To Do<span className="todo-count">5</span></li>
                    <li><i className="fas fa-shopping-cart"/>Work</li>
                    <li><i className="fas fa-plane"/>Travel</li>
                  </ul>
                </div>
              </div>
              <div className="todo-list">
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
            </div>
          </div>
          )}
        </TodoConsumer>                    
      </TodoProvider>
    );
  }
}

