import React, { Component } from "react";
import "./App.css";
import ToDo from "./ToDo";

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputArr: [],
      userTask: ''
    }
  }
  updateTask = (input) => {
    this.setState({
      userTask: input
    })
  }
  updateArr = () => {
    this.setState({
      inputArr: [...this.state.inputArr, this.state.userTask],
      userTask: ''
    })
  }
  render() {
    return (
      <div>
        <input
          value={this.state.userTask}
          onChange={e => this.updateTask(e.target.value)}
        />
        <button onClick={this.updateArr}>Submit</button>
        {this.state.inputArr.map((item, i) => <ToDo item={item} key={i}/>)}
      </div>
    );
  }
}

export default App;
