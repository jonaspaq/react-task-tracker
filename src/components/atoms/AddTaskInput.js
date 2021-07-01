import React from "react"
import '../../css/AddTaskInput.css'

export default class AddTaskINput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.onInput = this.onInput.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.props.onInputSubmit(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  onInput(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleChange} className={`input-group shadow-sm ${this.props.className}`}>
        <input type="text" value={this.state.inputValue} onChange={this.onInput} className="form-control" placeholder="Make breakfast" />
        <button className="btn btn-dark" type="submit" id="button-addon2">Add task</button>
      </form>
    )
  }
}