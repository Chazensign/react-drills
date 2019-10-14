import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  constructor() {
    super() 
      this.state = {
        image:
          "https://i.pinimg.com/originals/3b/7b/8f/3b7b8f48f781bc66d0eb57c263eda45f.jpg",
        alt: "Cheetah cub photo"
      };
  }
  render() {
    return (
      <div>
        <h2>Cheetah Cub Photo</h2>
        <Image image={this.state.image} alt={this.state.alt} />
      </div>
    );
  }
}

export default App;
