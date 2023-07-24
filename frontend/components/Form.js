import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
     this.state = {
        input: ''
     }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAdd(this.state.input)
    this.setState(this.state.input = '')
  }
  handleChange = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
  render() {
    return (
      <form>
          <input
            type="text" 
            name="text"
            value={this.state.input} 
            onChange={this.handleChange}
            placeholder="Add Todo..."
          />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
    )
  }
}
