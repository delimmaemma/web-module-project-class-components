import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
          <input
            type="text" 
            name="text" 
            placeholder="Add Todo..."
          />
          <button>Add</button>
        </form>
    )
  }
}
