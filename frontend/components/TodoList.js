import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.todos.map(todo => 
            {return (<Todo handleToggle = {this.props.handleToggle} key={todo.id} todo={todo} />)}
          ) //Use this.props.[name] to pass down props from parent to child to grandchild component
        }
      </ul>
    )
  }
}
