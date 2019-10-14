import React, { Component } from 'react'
import List from './List'
class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      userInput: ''
      
    }
  }
  updateInput = (str) => {
    this.setState({
      userInput: str
    })
  }
  inputClear = () => {
    this.setState({ 
      userInput: ''
    })
  }
  whenClicked = (input) => {
    this.updateInput(input)
    this.props.updateTask(this.state.userInput)
    setTimeout(this.inputClear(), 1000)
  }
  render() { 
    return ( 
      <div>
      <input value={this.state.userInput} onChange={e => this.updateInput(e.target.value)}/>
      <button onClick={() => this.whenClicked(this.state.userInput)} >Add</button>
      <List taskArr={this.props.taskArr} />
      </div>
     )
  }
}
 
export default NewTask;