import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          <li>Scoop the kitties</li>
          <li>Take out the trash</li>
          <li>Unload the dishwasher</li>
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
