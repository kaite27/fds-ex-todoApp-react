import React, {Component} from 'react'

export default class TodoForm extends Component {
  state = {
    newTodoBody: ''
  }

  // 이벤트 조작을 위한 핸들러 함수는 `handle`을 시작으로 하는 관례, 그리고 항상 화살표 함수
  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    })
  }

  handleAddNewTodoButton = e => {
    this.props.onCreate(this.state.newTodoBody)
    // input 에 있는 값을 새 할 일로 추가하고나서 input 빈 문자열로 비워주기
    this.setState({
      newTodoBody: ''
    })
  }

  render() {
    const { newTodoBody } = this.state
    return(        
      <label>
        <input className="todoInput" type="text" value={newTodoBody} onChange={this.handleInputChange} placeholder="I need to .."/>
        <button className="addTodoButton" onClick={this.handleAddNewTodoButton}>Add</button>
      </label>
    )
  }
}
