import React, {Component} from 'react'

export default class TodoItem extends Component {
  handleBodyClick = e => {
    const newBody = prompt('Enter new sentence which want to modify')
    const {id, onBodyUpdate} = this.props
    onBodyUpdate(id, newBody)
  }
  render() {
    const {id, body, complete, onComplete, onDelete} = this.props
    return (
      <li className={complete ? 'todoList complete' : 'todoList'} key={id}>
        <button className="btn__done" onClick={e => { onComplete(id) }}>Done</button>
        <span className={complete ? 'todoBody done' : 'todoBody'}  onClick={this.handleBodyClick}>{ body }</span>
        <button className="btn__delete" onClick={e => { onDelete(id) }}>Delete</button>
      </li>
    )
  }
}