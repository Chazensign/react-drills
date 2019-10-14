import React, { Component } from "react"
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }
  render() {
    return (
      <div>
        <input onChange={e => this.updateDisplay(e.target.value)} />
        <div>{this.state.userInput}</div>
      </div>
    );
  }
  updateDisplay(input) {
    this.setState({
      userInput: input
    })
  }
}

export default App;
