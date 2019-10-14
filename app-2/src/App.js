import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      array: ['Can', 'you', 'read', 'this', '?', 'Help', 'me', '!']
    }
  }
  displayArr = () => {
    return this.state.array.map((str, i)=> {
      return <div key={i}>{str}</div>
    })
  }
  render() {
    return (
      <div className='App'>
        <main>
          {this.displayArr()}
        </main>
      </div>
    );
  }
}

export default App;
