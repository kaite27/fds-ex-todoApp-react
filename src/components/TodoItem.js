import React, {Component} from 'react'

export default class TodoItem extends Component {
  render() {
    const {id, body, complete, onComplete, onDelete} = this.props
    return (
      <li className={complete ? 'complete' : ''} key={id}>
        <button onClick={e => { onComplete(id) }}>Done</button>
        {body}
        <button onClick={e => { onDelete(id) }}>Delete</button>
      </li>
    )
  }
}