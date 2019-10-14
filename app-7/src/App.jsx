import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";


class App extends Component {
  constructor() {
    super()
    this.state = {
      taskArr: []
    };
  }
  updateTask = (userInput) => {
    this.setState({
      taskArr: [...this.state.taskArr, userInput]
      
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <NewTask updateTask={this.updateTask} taskArr={this.state.taskArr} />
      </div>
    );
  }
}

export default App;
