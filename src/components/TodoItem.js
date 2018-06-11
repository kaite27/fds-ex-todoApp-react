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
      <li className={complete ? 'complete' : ''} key={id}>
        <button onClick={e => { onComplete(id) }}>Done</button>
        <span className="todoBody" onClick={this.handleBodyClick}>{ body }</span>
        <button onClick={e => { onDelete(id) }}>Delete</button>
      </li>
    )
  }
}