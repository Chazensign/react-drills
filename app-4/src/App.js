import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    }
  }
  inputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  alertBox = () => {
    alert(`Username:${this.state.user}    Password:${this.state.password}`)
  }
  render() {
    return (
      <div>
        <label>Username: </label><input name='user'onChange={e => this.inputUpdate(e)} />
        <label>Password:</label><input type='password' name='password' onChange={e => this.inputUpdate(e)} />
        <button onClick={this.alertBox}>Login</button>
      </div>
    );
  }
}

export default App;
