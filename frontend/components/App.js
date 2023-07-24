import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: crypto.randomUUID(),
          text: 'Scoop the kitties',
          completed: false
        },
        {
          id: crypto.randomUUID(),
          text: 'Take out the trash',
          completed: false
        },
        {
          id: crypto.randomUUID(),
          text: 'Put up the dishes',
          completed: false
        }
      ]
    }
  }

  handleAdd = (task) => {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          {
            id: crypto.randomUUID(),
            text: task,
            completed: false
          }
        ]
      }))
  }

  handleClear = () => {
    //Any time a modification is made, you need to call setState
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => 
        {
          return(!todo.completed)
        })
    })
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  render() {
    const {todos} = this.state //Needed to pass todos arg to children
    return (
      <div>
        <h1>Todos</h1>
        <TodoList handleToggle = {this.handleToggle} todos = {todos} />
        <Form handleAdd = {this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
