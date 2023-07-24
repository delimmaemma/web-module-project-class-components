import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
        <li key={this.props.todo.id}>
          {this.props.todo.text} {this.props.todo.completed && <span> - Completed!</span>}
        </li>
    )
  }
}
