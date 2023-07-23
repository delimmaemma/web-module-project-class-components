import React from 'react'

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
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            this.state.todos.map(todo => 
              <li key={todo.id}>
                {todo.text} {todo.completed && <span> - Completed!</span>}
              </li>
            ) 
          }
        </ul>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
