import React from 'react'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Scoop the kitties',
          completed: false
        },
        {
          id: 2,
          text: 'Take out the trash',
          completed: false
        },
        {
          id: 3,
          text: 'Put up the dishes',
          completed: false
        }
      ]
    }
  }
  render() {
    const {todos} = this.state //Needed to pass todos arg to children
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos = {todos} />
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
