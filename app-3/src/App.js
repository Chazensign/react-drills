import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      testArr: [
        "happy",
        "sad",
        "mad",
        "scared",
        "alarmed",
        "concerned",
        "disturbed"
      ],
      dispArr: [
        "happy",
        "sad",
        "mad",
        "scared",
        "alarmed",
        "concerned",
        "disturbed"
      ]
    };
  }
  filterArr = (input) => {
    console.log(input)
    this.setState({
      dispArr: this.state.testArr.filter(str => {
        return str.startsWith(input) ? <h2>{str}</h2> : false
      })
    })
  }
  render() {
    return (
      <div>
        <input onChange={e => this.filterArr(e.target.value)} />
        <div>
          {this.state.dispArr.map(str => {
            return <h2>{str}</h2>
          })}
        </div>
      </div>
    );
  }
}

export default App;
